
# Oauth2 Node Proxy

## Scenario

I had to use nginx-ingress with oauth2 proxy to protect K8s dashboard along with a few other end points using GITHUB Enterprise.
But Github's OAuth Apps only support 1 end point at a time. 
A solution was to change nginx config files to help with redirecting. As i was too lazy to look into it plus we were using other services with it.
So i just wrote a nodeJS with EJS Page that will use a single entry point and redirect to required endpoint.

