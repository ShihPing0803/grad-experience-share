import * as Yup from 'yup'

const postSchema = Yup.object({
  pSchool: Yup.string().required('學校必填'),
  pDep: Yup.string().required('系所必填'),
  pYear: Yup.number()
    .typeError('年度必須是數字')
    .required('推甄年度必填'),
  pURL: Yup.string().url('URL 格式錯誤').nullable(),
})


export default postSchema;