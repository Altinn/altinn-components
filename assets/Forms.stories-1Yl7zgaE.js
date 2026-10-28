var r=Object.defineProperty;var s=(n,l)=>r(n,"name",{value:l,configurable:!0});import{a5 as e,b as t,Q as i}from"./iframe-BfD7syly.js";import{S as a}from"./SelectField-BDvGd8kk.js";import{F as p}from"./Fieldset-B79kwUcw.js";import{T as c}from"./TextField-Gc8uNQmn.js";import{T as m}from"./TextareaField-BzDixyfF.js";import{R as d}from"./Radio-Br481gv6.js";import{C as x}from"./Checkbox-BE3WUPmE.js";import{S as u}from"./Switch-UQ3Ni1OJ.js";import"./preload-helper-Cc2_yIPf.js";import"./Select-DcvfH0JG.js";import"./FieldBase-fk0uyKjd.js";import"./Typography-EJ3Vxj-4.js";import"./useHighlightedText-BiU1Xaf8.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";const O={title:"Forms",parameters:{},args:{}},h=["xs","sm","md","lg"],o=s(()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1em"},children:h.map(n=>e.jsxs(p,{size:n,children:[e.jsxs("div",{style:{display:"flex",alignItems:"end",columnGap:".5em"},children:[e.jsx(c,{placeholder:"Size:"+n,size:n,label:"text"}),e.jsxs(a,{size:n,label:"select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsx(t,{children:"Button"}),e.jsxs(t,{size:n,children:[e.jsx("span",{children:"Button"}),e.jsx(i,{})]}),e.jsxs(t,{children:[e.jsx(i,{}),e.jsx("span",{children:"Button"})]}),e.jsx(t,{children:e.jsx(i,{})})]}),e.jsx(m,{label:"Textarea",size:n}),e.jsx(d,{size:n,label:"Radio"}),e.jsx(x,{size:n,label:"Checkbox"}),e.jsx(u,{size:n,label:"Switch"}),e.jsxs("footer",{style:{display:"flex",alignItems:"center",columnGap:".5em"},children:[e.jsx(t,{children:"Primary"}),e.jsx(t,{variant:"outline",children:"Secondary"})]})]},n))}),"Sizes"),M=["Sizes"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};export{o as Sizes,M as __namedExportsOrder,O as default};
