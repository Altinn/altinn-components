import{j as e}from"./iframe-DkQPO9ro.js";import{S as s}from"./SelectField-CuJGTewS.js";import{S as r}from"./XMark-5G2rqhrX.js";import{a as l}from"./Fieldset-CcK7G4vk.js";import{T as a}from"./TextField-DUUYp28e.js";import{B as o}from"./Button-OKMeorO5.js";import{T as n}from"./TextareaField-DTmFJBbK.js";import{R as m}from"./Radio-BD9-kisx.js";import{C as p}from"./Checkbox-BTcPQY1p.js";import{S as c}from"./Switch-DagNs5eW.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-BiXx2uS_.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-B1oKProt.js";import"./FieldBase-BPqKon2e.js";import"./Typography-cgJeIGtL.js";import"./index-BrTdOUlk.js";import"./useHighlightedText-BlkM7iRt.js";import"./Skeleton-8DklmnzK.js";import"./Label-DNmTNqvr.js";import"./index-BCCMT4X2.js";import"./useId-CwF4wxTL.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./button-Byovksc3.js";const P={title:"Forms",parameters:{},args:{}},d=["xs","sm","md","lg"],i=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1em"},children:d.map(t=>e.jsxs(l,{size:t,children:[e.jsxs("div",{style:{display:"flex",alignItems:"end",columnGap:".5em"},children:[e.jsx(a,{placeholder:"Size:"+t,size:t,label:"text"}),e.jsxs(s,{size:t,label:"select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsx(o,{children:"Button"}),e.jsxs(o,{size:t,children:[e.jsx("span",{children:"Button"}),e.jsx(r,{})]}),e.jsxs(o,{children:[e.jsx(r,{}),e.jsx("span",{children:"Button"})]}),e.jsx(o,{children:e.jsx(r,{})})]}),e.jsx(n,{label:"Textarea",size:t}),e.jsx(m,{size:t,label:"Radio"}),e.jsx(p,{size:t,label:"Checkbox"}),e.jsx(c,{size:t,label:"Switch"}),e.jsxs("footer",{style:{display:"flex",alignItems:"center",columnGap:".5em"},children:[e.jsx(o,{children:"Primary"}),e.jsx(o,{variant:"outline",children:"Secondary"})]})]},t))});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
