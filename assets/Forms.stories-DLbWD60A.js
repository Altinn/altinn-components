import{j as e}from"./iframe-CXxOXnma.js";import{S as r}from"./SelectField-B83nTm_K.js";import{S as s}from"./XMark-DvGwYctt.js";import{F as l}from"./Fieldset-BHpddb-0.js";import{T as a}from"./TextField-Q7sM8aCe.js";import{B as o}from"./Button-Dot-dF6F.js";import{T as n}from"./TextareaField-qni0q2MN.js";import{R as m}from"./Radio-BDFYm8BG.js";import{C as p}from"./Checkbox-lUo48js7.js";import{S as c}from"./Switch-DRnJSCoi.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-CIvLvEgZ.js";import"./tooltip-F-8CLWbq.js";import"./FieldBase-DpHGffp6.js";import"./Typography-4yj_ylkx.js";import"./index-DvzmMrBu.js";import"./useHighlightedText-Cggf4nMP.js";import"./Skeleton-DaZzKoDP.js";import"./Label-CsbjAOhP.js";import"./useId-CYy4MNIP.js";import"./Input-jSu8pVt5.js";const M={title:"Forms",parameters:{},args:{}},d=["xs","sm","md","lg"],i=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1em"},children:d.map(t=>e.jsxs(l,{size:t,children:[e.jsxs("div",{style:{display:"flex",alignItems:"end",columnGap:".5em"},children:[e.jsx(a,{placeholder:"Size:"+t,size:t,label:"text"}),e.jsxs(r,{size:t,label:"select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsx(o,{children:"Button"}),e.jsxs(o,{size:t,children:[e.jsx("span",{children:"Button"}),e.jsx(s,{})]}),e.jsxs(o,{children:[e.jsx(s,{}),e.jsx("span",{children:"Button"})]}),e.jsx(o,{children:e.jsx(s,{})})]}),e.jsx(n,{label:"Textarea",size:t}),e.jsx(m,{size:t,label:"Radio"}),e.jsx(p,{size:t,label:"Checkbox"}),e.jsx(c,{size:t,label:"Switch"}),e.jsxs("footer",{style:{display:"flex",alignItems:"center",columnGap:".5em"},children:[e.jsx(o,{children:"Primary"}),e.jsx(o,{variant:"outline",children:"Secondary"})]})]},t))});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const X=["Sizes"];export{i as Sizes,X as __namedExportsOrder,M as default};
