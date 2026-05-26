import{j as e}from"./iframe-CdkbiINU.js";import{S as r}from"./SelectField-B4IcM8Wn.js";import{S as s}from"./XMark-CXTea0I2.js";import{F as l}from"./Fieldset-CiaDAd-z.js";import{T as a}from"./TextField-B9cNHav0.js";import{B as o}from"./Button-DbqBa2Ra.js";import{T as n}from"./TextareaField-BVooByg5.js";import{R as m}from"./Radio-su5EbvLM.js";import{C as p}from"./Checkbox-BOgGX4le.js";import{S as c}from"./Switch-Cw7IuUMn.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-CLzeIvF_.js";import"./tooltip-ClrKYCC2.js";import"./FieldBase-CADFK9ds.js";import"./Typography-CbNgqrog.js";import"./index-ClUlC5r_.js";import"./useHighlightedText-Z8eL_Nst.js";import"./Skeleton-DNrLKFK9.js";import"./Label-DOiiUdXJ.js";import"./useId-BBNwfwR-.js";import"./Input-CXgAq3E9.js";const M={title:"Forms",parameters:{},args:{}},d=["xs","sm","md","lg"],i=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1em"},children:d.map(t=>e.jsxs(l,{size:t,children:[e.jsxs("div",{style:{display:"flex",alignItems:"end",columnGap:".5em"},children:[e.jsx(a,{placeholder:"Size:"+t,size:t,label:"text"}),e.jsxs(r,{size:t,label:"select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsx(o,{children:"Button"}),e.jsxs(o,{size:t,children:[e.jsx("span",{children:"Button"}),e.jsx(s,{})]}),e.jsxs(o,{children:[e.jsx(s,{}),e.jsx("span",{children:"Button"})]}),e.jsx(o,{children:e.jsx(s,{})})]}),e.jsx(n,{label:"Textarea",size:t}),e.jsx(m,{size:t,label:"Radio"}),e.jsx(p,{size:t,label:"Checkbox"}),e.jsx(c,{size:t,label:"Switch"}),e.jsxs("footer",{style:{display:"flex",alignItems:"center",columnGap:".5em"},children:[e.jsx(o,{children:"Primary"}),e.jsx(o,{variant:"outline",children:"Secondary"})]})]},t))});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
