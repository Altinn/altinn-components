var a=Object.defineProperty;var l=(t,r)=>a(t,"name",{value:r,configurable:!0});import{a7 as e,c as o,T as s}from"./iframe-CW69B4-4.js";import{S as n}from"./SelectField-D32ll--L.js";import{F as c}from"./Fieldset-DHwUaLbz.js";import{T as p}from"./TextField-CM3gnTYW.js";import{T as m}from"./TextareaField-L2bQSsSx.js";import{R as d}from"./Radio-Dd1Mp9ZR.js";import{C as x}from"./Checkbox-DlUPiy22.js";import{S as u}from"./Switch-D3R4G4XP.js";import"./preload-helper-Cc2_yIPf.js";import"./Select-DAaDkbSY.js";import"./FieldBase-Cx7I1cae.js";import"./Typography-CD2WmtRN.js";import"./useHighlightedText-Coh-oebD.js";import"./Field-rkOFbQMU.js";import"./Label-DMxT2wjQ.js";import"./Input-BNHnVUMY.js";const O={title:"Forms",parameters:{},args:{}},h=["xs","sm","md","lg"],i=l(()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1em"},children:h.map(t=>e.jsxs(c,{size:t,children:[e.jsxs("div",{style:{display:"flex",alignItems:"end",columnGap:".5em"},children:[e.jsx(p,{placeholder:"Size:"+t,size:t,label:"text"}),e.jsxs(n,{size:t,label:"select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsx(o,{children:"Button"}),e.jsxs(o,{size:t,children:[e.jsx("span",{children:"Button"}),e.jsx(s,{})]}),e.jsxs(o,{children:[e.jsx(s,{}),e.jsx("span",{children:"Button"})]}),e.jsx(o,{children:e.jsx(s,{})})]}),e.jsx(m,{label:"Textarea",size:t}),e.jsx(d,{size:t,label:"Radio"}),e.jsx(x,{size:t,label:"Checkbox"}),e.jsx(u,{size:t,label:"Switch"}),e.jsxs("footer",{style:{display:"flex",alignItems:"center",columnGap:".5em"},children:[e.jsx(o,{children:"Primary"}),e.jsx(o,{variant:"outline",children:"Secondary"})]})]},t))}),"Sizes");i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const M=["Sizes"];export{i as Sizes,M as __namedExportsOrder,O as default};
