# Kubernetes manifests

- `base/`: namespace, API and frontend Deployments, Services, plus a `kustomization.yaml`.
- `overlays/local/`: the overlay used by the GitOps examples. It reuses `base/` and sets one replica per Deployment.

The Deployments use locally built images with `imagePullPolicy: Never`, so load them into Kind first:

```bash
docker compose build
kind load docker-image platformops-lab-api:latest platformops-lab-frontend:latest --name platformops-lab
kubectl apply -k kubernetes/overlays/local
```

Render without applying:

```bash
kubectl kustomize kubernetes/overlays/local
```
