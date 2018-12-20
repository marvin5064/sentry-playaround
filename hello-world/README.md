```
> curl -v http://$(minikube ip):31317/ping
pong!

> curl -X POST http://$(minikube ip):31317/ -d "full_url=https://redhat.com"
EZpNfRi

> curl -X GET http://$(minikube ip):31317/EZpNfRi -v
*   Trying 192.168.99.100...
* Connected to 192.168.99.100 (192.168.99.100) port 31317 (#0)
> GET /EZpNfRi HTTP/1.1
> Host: 192.168.99.100:31317
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 307 Temporary Redirect
< Location: https://redhat.com
< Content-Length: 0
< Content-Type: text/plain; charset=utf-8
<
* Connection #0 to host 192.168.99.100 left intact
```


reference:
https://medium.com/@xcoulon/deploying-your-first-web-app-on-minikube-6e98d2884b3a
https://medium.com/@xcoulon/storing-data-into-persistent-volumes-on-kubernetes-fb155da16666
