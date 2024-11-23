import * as yup from 'yup'
export const ContactValidator = yup.object().shape({
    name : yup.string().required("فیلد نام الزامی است !"),
    phone : yup.string("شماره تماس باید عدد باشد").matches(/^09\d{8}$/, 'شماره تماس باید معتبر باشد     و 11 رقم باشد').required("فیلد شماره تماس ضروری است !"),
    email : yup.string().required("فیلد ایمیل الزامی است !").email("باید یک ایمیل معتبر وارد کنید !"),
    description : yup.string().required("فیلد توضیحات الزامی است !"),
})