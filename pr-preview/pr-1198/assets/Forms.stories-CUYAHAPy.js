import{j as e}from"./iframe-DXwGEFZf.js";import{S as r}from"./SelectField-C0G-jLKZ.js";import{S as s}from"./XMark-BspkucHC.js";import{F as l}from"./Fieldset-Cy33GwGY.js";import{T as a}from"./TextField-DxbXRgx4.js";import{B as o}from"./Button-BcOfKjgE.js";import{T as n}from"./TextareaField-X2pnbxW2.js";import{R as m}from"./Radio-D_vuTGqH.js";import{C as p}from"./Checkbox-C0ySSfg8.js";import{S as c}from"./Switch-BjC1I4Sd.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-CMaGxBmH.js";import"./tooltip-OQNLf2nv.js";import"./FieldBase-BwCMZAv_.js";import"./Typography-CegVoZkA.js";import"./index-DpQTH4Pc.js";import"./useHighlightedText-NV3gg9HW.js";import"./Skeleton-CD7VUCi3.js";import"./Label-ChoE5xRO.js";import"./useId-Df52yuGg.js";import"./Input-CjRvyA41.js";const M={title:"Forms",parameters:{},args:{}},d=["xs","sm","md","lg"],i=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1em"},children:d.map(t=>e.jsxs(l,{size:t,children:[e.jsxs("div",{style:{display:"flex",alignItems:"end",columnGap:".5em"},children:[e.jsx(a,{placeholder:"Size:"+t,size:t,label:"text"}),e.jsxs(r,{size:t,label:"select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsx(o,{children:"Button"}),e.jsxs(o,{size:t,children:[e.jsx("span",{children:"Button"}),e.jsx(s,{})]}),e.jsxs(o,{children:[e.jsx(s,{}),e.jsx("span",{children:"Button"})]}),e.jsx(o,{children:e.jsx(s,{})})]}),e.jsx(n,{label:"Textarea",size:t}),e.jsx(m,{size:t,label:"Radio"}),e.jsx(p,{size:t,label:"Checkbox"}),e.jsx(c,{size:t,label:"Switch"}),e.jsxs("footer",{style:{display:"flex",alignItems:"center",columnGap:".5em"},children:[e.jsx(o,{children:"Primary"}),e.jsx(o,{variant:"outline",children:"Secondary"})]})]},t))});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
