import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./XMark-CDYpubJK.js";import{t as n}from"./Fieldset-Bi-S6onu.js";import{t as r}from"./TextareaField-C27q0FxU.js";import{t as i}from"./Radio-BHBHKm0J.js";import{t as a}from"./Checkbox-Clj0HG5u.js";import{t as o}from"./Switch-8Dpd7HT2.js";import{t as s}from"./TextField-Ds66Sg2V.js";import{t as c}from"./SelectField-Bl8God7J.js";import{t as l}from"./Button-L6T5IVdq.js";var u=e(),d={title:`Forms`,parameters:{},args:{}},f=[`xs`,`sm`,`md`,`lg`],p=()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,rowGap:`1em`},children:f.map(e=>(0,u.jsxs)(n,{size:e,children:[(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`end`,columnGap:`.5em`},children:[(0,u.jsx)(s,{placeholder:`Size:`+e,size:e,label:`text`}),(0,u.jsxs)(c,{size:e,label:`select`,children:[(0,u.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,u.jsx)(`option`,{value:`2`,children:`Option 2`})]}),(0,u.jsx)(l,{children:`Button`}),(0,u.jsxs)(l,{size:e,children:[(0,u.jsx)(`span`,{children:`Button`}),(0,u.jsx)(t,{})]}),(0,u.jsxs)(l,{children:[(0,u.jsx)(t,{}),(0,u.jsx)(`span`,{children:`Button`})]}),(0,u.jsx)(l,{children:(0,u.jsx)(t,{})})]}),(0,u.jsx)(r,{label:`Textarea`,size:e}),(0,u.jsx)(i,{size:e,label:`Radio`}),(0,u.jsx)(a,{size:e,label:`Checkbox`}),(0,u.jsx)(o,{size:e,label:`Switch`}),(0,u.jsxs)(`footer`,{style:{display:`flex`,alignItems:`center`,columnGap:`.5em`},children:[(0,u.jsx)(l,{children:`Primary`}),(0,u.jsx)(l,{variant:`outline`,children:`Secondary`})]})]},e))});p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};var m=[`Sizes`];export{p as Sizes,m as __namedExportsOrder,d as default};