export interface IImagePicker {
  assets: Asset[]
  canceled: boolean
  cancelled: boolean
}

interface Asset {
  assetId?: any
  base64: string
  duration?: any
  exif?: any
  fileName?: any
  fileSize: number
  height: number
  type: string
  uri: string
  width: number
}
