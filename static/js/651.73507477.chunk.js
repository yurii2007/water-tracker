"use strict";(self.webpackChunkwater_tracker=self.webpackChunkwater_tracker||[]).push([[651],{7651:(s,e,r)=>{r.r(e),r.d(e,{default:()=>u});r(2791);var a=r(8007),i=r(1686),o=r.n(i),l=r(5705),t=r(5283),n=r(9434),d=r(9190),m=r(9426),c=r(2306),p=r(3329);const w=a.Ry().shape({email:a.Z_().email("email is not valid").min(6,"the email must containe min six leters").required("email is required").trim().matches(/^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,"email is not valid"),password:a.Z_().required("password is required").min(8,"Password must be 8 characters long")}),h=()=>{const s=(0,n.I0)(),{showPasswords:e,togglePasswordVisibility:r}=(0,c.r)(["password1","password2"]);return(0,p.jsx)(t.Yb,{children:(0,p.jsxs)(t.Zk,{children:[(0,p.jsx)(t.Dx,{children:"Sign In"}),(0,p.jsx)(l.J9,{initialValues:{email:"",password:""},onSubmit:(e,r)=>{let{resetForm:a}=r;s((0,d.Fv)(e)).unwrap().then((()=>{a(),o().Notify.success("success")})).catch((s=>{o().Notify.failure(s)}))},validationSchema:w,children:s=>{let{errors:a,touched:i}=s;return(0,p.jsxs)(l.l0,{children:[(0,p.jsx)(t.xH,{children:"Enter your email"}),(0,p.jsx)(t.II,{$error:a.email&&i.email,children:(0,p.jsx)(t.Wi,{$error:a.email&&i.email,autoComplete:"off",name:"email",type:"email",placeholder:"E-mail"})}),(0,p.jsx)(t.BD,{name:"email",component:"div"}),(0,p.jsx)(t.xH,{children:"Enter your password"}),(0,p.jsxs)(t.II,{$error:a.password&&i.password,children:[(0,p.jsx)(t.Wi,{$error:a.password&&i.password,autoComplete:"off",name:"password",type:e.password1?"text":"password",placeholder:"Password"}),(0,p.jsx)(m.S,{showPassword:e.password1,onToggle:()=>r("password1")})]}),(0,p.jsx)(t.BD,{name:"password",component:"div"}),(0,p.jsx)(t.Ck,{type:"submit",children:"Sign In"})]})}}),(0,p.jsx)(t.EG,{to:"/signup",children:"Sign Up"})]})})},u=()=>(0,p.jsx)(h,{})}}]);
//# sourceMappingURL=651.73507477.chunk.js.map