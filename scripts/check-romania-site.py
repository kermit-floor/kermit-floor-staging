import concurrent.futures,json,re,sys,urllib.request,urllib.error,urllib.parse,xml.etree.ElementTree as ET
base=sys.argv[1] if len(sys.argv)>1 else 'http://localhost:9003'
def get(path):
 req=urllib.request.Request(base+path,headers={'User-Agent':'Kermit-Romania-Launch-QA','Accept-Language':'tr-TR,en;q=0.9'})
 try:
  with urllib.request.urlopen(req,timeout=45) as r:return r.status,r.read().decode(),r.geturl()
 except urllib.error.HTTPError as e:return e.code,e.read().decode(),e.url
status,sitemap,_=get('/sitemap.xml');assert status==200
urls=[x.text for x in ET.fromstring(sitemap).findall('{*}url/{*}loc')]
def check(url):
 path=urllib.parse.urlsplit(url).path;status,html,final=get(path)
 lang='en' if path=='/en' or path.startswith('/en/') else 'ro'
 failures=[]
 if status!=200:failures.append('status '+str(status))
 if not re.search('<html[^>]+lang="'+lang+'"',html):failures.append('language')
 canon=re.search(r'<link rel="canonical" href="([^"]+)"',html)
 if not canon or canon.group(1).rstrip('/')!=url.rstrip('/'):failures.append('canonical')
 if re.search(r'(href="(?:tel:\+90|mailto:info@kermit|https://wa.me/(?!40722547258))|href="/tr(?:/|"))',html):failures.append('foreign contact or Turkish link')
 if re.search(r'(MISSING_MESSAGE|INVALID_MESSAGE|NEXT_NOT_FOUND)',html):failures.append('render error')
 return {'path':path,'status':status,'failures':failures}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:result=list(pool.map(check,urls))
errors=[r for r in result if r['failures']]
print(json.dumps({'base':base,'pages':len(urls),'failures':errors},ensure_ascii=False,indent=2))
for path in ['/tr','/tr/iletisim','/contact','/en/contact','/robots.txt','/llms.txt']:
 status,html,final=get(path);print(path,status,final)
 if path.startswith('/tr'):assert status==404,(path,status)
assert not errors
