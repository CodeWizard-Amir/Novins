import * as yup from 'yup'
export const CollaborationValidator = yup.object().shape({
    name : yup.string().required("فیلد نام ضروری است !"),
    phone : yup.string("شماره تماس باید عدد باشد").max(10,"حداکثر باید 11 رقم باشد").min(10,"حداقل باید 11 رقم باشد").required("فیلد شماره تماس ضروری است !"),
    city : yup.string().required("فیلد محل سکونت ضروری است !"),
    skills : yup.string().required("فیلد مهارت ها ضروری است !"),
    description : yup.string().required("فیلد توضیحات ضروری است !")
})