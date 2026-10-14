# GitOps

Both examples watch the same Kustomize overlay (`kubernetes/overlays/local`) on the `main` branch. Use one at a time on the same cluster; they are alternatives, not a pair.

## Argo CD (primary)

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl apply -f gitops/argocd/application.yaml
kubectl -n argocd port-forward svc/argocd-server 8081:443
```

Open https://localhost:8081. The admin password is in the `argocd-initial-admin-secret` secret:

```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```

## Flux (alternative)

```bash
flux install
kubectl apply -f gitops/flux/gitrepository.yaml -f gitops/flux/kustomization.yaml
flux get kustomizations
```

Both controllers pull from this public repository, so the images must already exist in the cluster (see `kubernetes/README.md`).
