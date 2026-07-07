output "namespace" {
  value = kubernetes_namespace.platformops.metadata[0].name
}
