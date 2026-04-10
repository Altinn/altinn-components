import{j as e}from"./iframe-DRbAvM8B.js";import{S as s}from"./SelectField-CSlAjk45.js";import{S as r}from"./XMark-BeNK6Eym.js";import{a as l}from"./Fieldset-DWXEpDF1.js";import{T as a}from"./TextField-CJk_az0l.js";import{B as o}from"./Button-DXRH0CtL.js";import{T as n}from"./TextareaField-BqlwNIuI.js";import{R as m}from"./Radio-CdAZDOUq.js";import{C as p}from"./Checkbox-KzN5nmmh.js";import{S as c}from"./Switch-Wk8JvxKk.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-ig1VVHXb.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-BRHMCtFk.js";import"./FieldBase-_93TCpK5.js";import"./Typography-Da6zx1kt.js";import"./index-Dpt5RUeZ.js";import"./useHighlightedText-DaUYVTi5.js";import"./Skeleton-C6w0Fovi.js";import"./Label-Zr8dB_9-.js";import"./index-Vs8aUpKw.js";import"./useId-p3Uu13R2.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./button-DB6SpB_q.js";const P={title:"Forms",parameters:{},args:{}},d=["xs","sm","md","lg"],i=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1em"},children:d.map(t=>e.jsxs(l,{size:t,children:[e.jsxs("div",{style:{display:"flex",alignItems:"end",columnGap:".5em"},children:[e.jsx(a,{placeholder:"Size:"+t,size:t,label:"text"}),e.jsxs(s,{size:t,label:"select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsx(o,{children:"Button"}),e.jsxs(o,{size:t,children:[e.jsx("span",{children:"Button"}),e.jsx(r,{})]}),e.jsxs(o,{children:[e.jsx(r,{}),e.jsx("span",{children:"Button"})]}),e.jsx(o,{children:e.jsx(r,{})})]}),e.jsx(n,{label:"Textarea",size:t}),e.jsx(m,{size:t,label:"Radio"}),e.jsx(p,{size:t,label:"Checkbox"}),e.jsx(c,{size:t,label:"Switch"}),e.jsxs("footer",{style:{display:"flex",alignItems:"center",columnGap:".5em"},children:[e.jsx(o,{children:"Primary"}),e.jsx(o,{variant:"outline",children:"Secondary"})]})]},t))});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1em'
  }}>
      {sizes.map(size => {
      return <Fieldset key={size} size={size}>
            <div style={{
          display: 'flex',
          alignItems: 'end',
          columnGap: '.5em'
        }}>
              <TextField placeholder={'Size:' + size} size={size} label="text" />
              <SelectField size={size} label="select">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </SelectField>
              <Button>Button</Button>
              <Button size={size}>
                <span>Button</span>
                <XMarkIcon />
              </Button>
              <Button>
                <XMarkIcon />
                <span>Button</span>
              </Button>
              <Button>
                <XMarkIcon />
              </Button>
            </div>
            <TextareaField label="Textarea" size={size} />
            <Radio size={size} label="Radio" />
            <Checkbox size={size} label="Checkbox" />
            <Switch size={size} label="Switch" />
            <footer style={{
          display: 'flex',
          alignItems: 'center',
          columnGap: '.5em'
        }}>
              <Button>Primary</Button>
              <Button variant="outline">Secondary</Button>
            </footer>
          </Fieldset>;
    })}
    </div>;
}`,...i.parameters?.docs?.source}}};const _=["Sizes"];export{i as Sizes,_ as __namedExportsOrder,P as default};
