/** Prepare injectable files for all images */

const getImagesConfigurationFiles = (manifests: any) => {
  const dockerImageOverlay2Imagedb = "docker/image/overlay2/imagedb"
  return manifests
    .map(({ configManifestV2, image_id }: any) => {
      const shortImage_id = image_id.split(":")[1]
      return [
        {
          header: { name: `${dockerImageOverlay2Imagedb}/content/sha256/${shortImage_id}`, mode: 644 },
          content: JSON.stringify(configManifestV2),
        },
        {
          header: { name: `${dockerImageOverlay2Imagedb}/metadata/sha256/${shortImage_id}/lastUpdated`, mode: 644 },
          content: new Date().toISOString(),
        },
      ]
    })
    .flat()
}

export { getImagesConfigurationFiles }
