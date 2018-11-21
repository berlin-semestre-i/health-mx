import React from 'react'
import { Button } from 'semantic-ui-react'
import uploadcare from 'uploadcare-widget'
import getConfig from 'next/config'

const config = getConfig()

const {UPLOADCARE_PUBLIC_KEY} = (config) ? config.publicRuntimeConfig : {}

const selectUploadCareImage = async ( onChange, onSuccessHandler ) => {
  uploadcare.start({ publicKey: UPLOADCARE_PUBLIC_KEY })

  try{
    const image = await uploadcare.openDialog( null, {
      crop: '',
      imagesOnly: true,
    } )
    onSuccessHandler(image.cdnUrl, onChange)
  } catch (error) {/*This prevents an error if user won't upload image*/}
}

const UploadcareUploader = ({label, onChange, onSuccessHandler, UPLOADCARE_PUBLIC_KEY }) => (
  <React.Fragment>
    <Button
      secondary
      type="button"
      onClick={() => selectUploadCareImage(onChange, onSuccessHandler, UPLOADCARE_PUBLIC_KEY)}
    >
      {label}
    </Button>
  </React.Fragment>
)

export default UploadcareUploader