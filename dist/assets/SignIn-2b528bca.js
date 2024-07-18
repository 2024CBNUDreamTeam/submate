import{J as e,C as a,a2 as t,N as i,j as o,F as n,B as c}from"./index-638c3a2f.js";import{S as l}from"./SignupInput-3bfa9eb8.js";import"./schema-ebab96f4.js";import{I as m}from"./ThemeButton-1bc4332a.js";import"./index.esm-e7bee50c.js";const u=e(a)`
  border: 1px solid ${({theme:r})=>r.colorScheme==="dark"?r.colors.gray[7]:r.colors.gray[2]};
  border-radius: 0.375rem;
`,d=e(t)`
  font-size: var(--mantine-font-size-sm);
  color: var(--mantine-color-blue-6);
`,f=()=>{const{colorScheme:r}=i(),s=r==="dark";return o.jsxs(n,{justify:"center",align:"center",direction:"column",h:"80vh",m:"auto",children:[o.jsx(c,{component:t,to:"/",w:90,h:90,variant:"none",children:o.jsx(m,{src:`./assets/logos/universe${s?"LogoWhite":"LogoBlack"}.svg`,alt:"home button"})}),o.jsxs(n,{direction:"column",w:350,children:[o.jsx(l,{}),o.jsx(u,{align:"center",w:"100%",mt:15,fw:300,children:o.jsxs("p",{children:["New to Submate? ",o.jsx(d,{to:"/signup",children:"Create an accout"}),"."]})})]})]})};export{f as default};
