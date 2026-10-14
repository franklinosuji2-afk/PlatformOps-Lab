# Architecture

## Compose stack (local)

```
browser -> frontend (nginx :8080)
curl    -> api (Node/Express :3000) --/metrics--> Prometheus (:9090) --> Grafana (:3001)
all containers --stdout--> promtail --> Loki (:3100) --> Grafana
```

Prometheus scrapes `api:3000/metrics` every 15 seconds. promtail discovers containers of the `platformops-lab` Compose project through the Docker socket and labels each log stream with its Compose service name.

## Kind cluster

```
Git (main) --> Argo CD or Flux --> kubernetes/overlays/local --> kubernetes/base
                                                                 namespace, api and frontend Deployments, Services
```

The Deployments use locally built images (`imagePullPolicy: Never`), loaded into Kind with `kind load docker-image`.

## Terraform

The Terraform configuration uses the Kubernetes provider against the local Kind cluster. It creates the `platformops` namespace and an example nginx Deployment and Service. It is separate from the Kustomize and GitOps path.

## CI

GitHub Actions validates the Compose file, Kustomize renders and Terraform configuration, builds the images, and reports Trivy findings. Snyk runs when a token is configured.
