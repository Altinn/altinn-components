import{a7 as e,c as o,T as s}from"./iframe-BlxKDeRn.js";import{S as l}from"./SelectField-C4oZxwi_.js";import{F as r}from"./Fieldset-DiToHbVn.js";import{T as a}from"./TextField-D1EOpeD3.js";import{T as n}from"./TextareaField-DlNR6zvy.js";import{R as c}from"./Radio-DUD9QITw.js";import{C as p}from"./Checkbox-DKltAtSB.js";import{S as m}from"./Switch-CR8TgQ3y.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-AKe9L4ND.js";import"./FieldBase-_XE-YVEJ.js";import"./Typography-CdulF3LZ.js";import"./useHighlightedText-Cf7684f7.js";import"./Field-043F-93h.js";import"./Label-DcRYrAWF.js";import"./Input-CXwaRbp1.js";const w={title:"Forms",parameters:{},args:{}},d=["xs","sm","md","lg"],i=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1em"},children:d.map(t=>e.jsxs(r,{size:t,children:[e.jsxs("div",{style:{display:"flex",alignItems:"end",columnGap:".5em"},children:[e.jsx(a,{placeholder:"Size:"+t,size:t,label:"text"}),e.jsxs(l,{size:t,label:"select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsx(o,{children:"Button"}),e.jsxs(o,{size:t,children:[e.jsx("span",{children:"Button"}),e.jsx(s,{})]}),e.jsxs(o,{children:[e.jsx(s,{}),e.jsx("span",{children:"Button"})]}),e.jsx(o,{children:e.jsx(s,{})})]}),e.jsx(n,{label:"Textarea",size:t}),e.jsx(c,{size:t,label:"Radio"}),e.jsx(p,{size:t,label:"Checkbox"}),e.jsx(m,{size:t,label:"Switch"}),e.jsxs("footer",{style:{display:"flex",alignItems:"center",columnGap:".5em"},children:[e.jsx(o,{children:"Primary"}),e.jsx(o,{variant:"outline",children:"Secondary"})]})]},t))});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const G=["Sizes"];export{i as Sizes,G as __namedExportsOrder,w as default};
