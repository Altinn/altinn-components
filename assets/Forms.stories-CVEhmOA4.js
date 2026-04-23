import{j as e}from"./iframe-DDirkHus.js";import{S as s}from"./SelectField-DdEZYdOD.js";import{S as r}from"./XMark-DldqIUES.js";import{a as l}from"./Fieldset-D58mDId3.js";import{T as a}from"./TextField-D1RIV1wY.js";import{B as o}from"./Button-CdMyOsNo.js";import{T as n}from"./TextareaField-CRse2xzx.js";import{R as m}from"./Radio-C_PSeTAq.js";import{C as p}from"./Checkbox-DUx8DoUm.js";import{S as c}from"./Switch-DcTcdqOA.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-CxgNS-d6.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-CIAaUVpb.js";import"./FieldBase-BNjKJDB0.js";import"./Typography-Do8CAd45.js";import"./index-B2YDfdyU.js";import"./useHighlightedText-CWfqHJQe.js";import"./Skeleton-0VOrezcL.js";import"./Label-9QWpQ8Bw.js";import"./index-F2gU6D0V.js";import"./useId-CVUrh2ea.js";import"./Input-C9yDHhzX.js";import"./input-CQTkCXgP.js";import"./button-CnVt3gpj.js";const P={title:"Forms",parameters:{},args:{}},d=["xs","sm","md","lg"],i=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1em"},children:d.map(t=>e.jsxs(l,{size:t,children:[e.jsxs("div",{style:{display:"flex",alignItems:"end",columnGap:".5em"},children:[e.jsx(a,{placeholder:"Size:"+t,size:t,label:"text"}),e.jsxs(s,{size:t,label:"select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsx(o,{children:"Button"}),e.jsxs(o,{size:t,children:[e.jsx("span",{children:"Button"}),e.jsx(r,{})]}),e.jsxs(o,{children:[e.jsx(r,{}),e.jsx("span",{children:"Button"})]}),e.jsx(o,{children:e.jsx(r,{})})]}),e.jsx(n,{label:"Textarea",size:t}),e.jsx(m,{size:t,label:"Radio"}),e.jsx(p,{size:t,label:"Checkbox"}),e.jsx(c,{size:t,label:"Switch"}),e.jsxs("footer",{style:{display:"flex",alignItems:"center",columnGap:".5em"},children:[e.jsx(o,{children:"Primary"}),e.jsx(o,{variant:"outline",children:"Secondary"})]})]},t))});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
