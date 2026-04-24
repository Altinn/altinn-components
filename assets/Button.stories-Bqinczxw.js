import{j as n}from"./iframe-Dip44woq.js";import{B as r}from"./Button-afp2Zwog.js";import{B as p}from"./ButtonGroup-BAe3FIfN.js";import{S as d}from"./XMark-CynTM0oO.js";import{S as B}from"./Pencil-BoP13ir1.js";import{S as m}from"./ArrowRight-CfbuML6m.js";import{S as x}from"./ArrowLeft-CNlUOqH4.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CZ5tfceY.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./index-B24kaf2B.js";import"./useId-CMLjH0Fx.js";const b={title:"Button/Button",component:r,parameters:{},args:{children:"Button"}},g=["xs","sm","md","lg"],j=["solid","tinted","outline","ghost"],s=t=>n.jsx(r,{...t,children:"Button"}),a=t=>n.jsxs(p,{children:[n.jsx(r,{...t,children:"Default"}),n.jsx(r,{...t,variant:"tinted",children:"Tinted"}),n.jsx(r,{...t,variant:"outline",children:"Outline"}),n.jsx(r,{...t,variant:"ghost",children:"Ghost"})]}),i=t=>n.jsxs(p,{children:[n.jsx(r,{...t,color:"company",children:"Company"}),n.jsx(r,{...t,color:"person",children:"Person"}),n.jsx(r,{...t,color:"neutral",children:"Neutral"}),n.jsx(r,{...t,color:"danger",children:"Danger"}),n.jsx(r,{...t,color:"warning",children:"Warning"})]}),u=t=>n.jsxs(p,{children:[n.jsx(r,{...t,size:"xs",children:"XSmall"}),n.jsx(r,{...t,size:"sm",children:"Small"}),n.jsx(r,{...t,size:"md",children:"Medium"}),n.jsx(r,{...t,size:"lg",children:"Large"})]}),c=t=>n.jsxs(p,{children:[n.jsx(r,{...t,icon:!0,children:n.jsx(d,{})}),n.jsx(r,{...t,icon:!0,rounded:!0,children:n.jsx(d,{})}),n.jsxs(r,{...t,children:[n.jsx(B,{}),n.jsx("span",{children:"Button"})]}),n.jsxs(r,{...t,children:[n.jsx("span",{children:"Button"}),n.jsx(m,{})]})]}),l=t=>n.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1rem"},children:j.map(o=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",rowGap:"1rem",alignItems:"start",justifyContent:"space-between",width:"100%"},children:[n.jsx("span",{children:o}),g.map(e=>n.jsxs("div",{"data-size":e,style:{display:"flex",alignItems:"center",columnGap:"1rem"},children:[n.jsx(r,{...t,variant:o,size:e,icon:!0,children:n.jsx(d,{})}),n.jsx(r,{...t,variant:o,size:e,rounded:!0,icon:!0,children:n.jsx(d,{})}),n.jsx(r,{...t,variant:o,size:e,children:"Button"}),n.jsxs(r,{...t,variant:o,size:e,children:[n.jsx(x,{}),n.jsx("span",{children:"Button"})]}),n.jsxs(r,{...t,variant:o,size:e,children:[n.jsx("span",{children:"Button"}),n.jsx(m,{})]}),n.jsx(r,{...t,loading:!0,variant:o,size:e,children:"Loading ..."}),n.jsx(r,{...t,disabled:!0,variant:o,size:e,children:"Disabled"}),n.jsx("span",{children:e})]},e))]},o))});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Story) => {
  return <Button {...args}>Button</Button>;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: Story) => {
  return <ButtonGroup>
      <Button {...args}>Default</Button>
      <Button {...args} variant="tinted">
        Tinted
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </ButtonGroup>;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: Story) => {
  return <ButtonGroup>
      <Button {...args} color="company">
        Company
      </Button>
      <Button {...args} color="person">
        Person
      </Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
      <Button {...args} color="danger">
        Danger
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
    </ButtonGroup>;
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: Story) => {
  return <ButtonGroup>
      <Button {...args} size="xs">
        XSmall
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </ButtonGroup>;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Story) => {
  return <ButtonGroup>
      <Button {...args} icon>
        <XMarkIcon />
      </Button>
      <Button {...args} icon rounded>
        <XMarkIcon />
      </Button>
      <Button {...args}>
        <PencilIcon />
        <span>Button</span>
      </Button>
      <Button {...args}>
        <span>Button</span>
        <ArrowRightIcon />
      </Button>
    </ButtonGroup>;
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Story) => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem'
  }}>
      {variants.map(variant => {
      return <div key={variant} style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem',
        alignItems: 'start',
        justifyContent: 'space-between',
        width: '100%'
      }}>
            <span>{variant}</span>
            {sizes.map(size => {
          return <div key={size} data-size={size} style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '1rem'
          }}>
                  <Button {...args} variant={variant} size={size} icon>
                    <XMarkIcon />
                  </Button>
                  <Button {...args} variant={variant} size={size} rounded icon>
                    <XMarkIcon />
                  </Button>
                  <Button {...args} variant={variant} size={size}>
                    Button
                  </Button>
                  <Button {...args} variant={variant} size={size}>
                    <ArrowLeftIcon />
                    <span>Button</span>
                  </Button>
                  <Button {...args} variant={variant} size={size}>
                    <span>Button</span>
                    <ArrowRightIcon />
                  </Button>
                  <Button {...args} loading={true} variant={variant} size={size}>
                    Loading ...
                  </Button>
                  <Button {...args} disabled variant={variant} size={size}>
                    Disabled
                  </Button>
                  <span>{size}</span>
                </div>;
        })}
          </div>;
    })}
    </div>;
}`,...l.parameters?.docs?.source}}};const C=["Default","Variants","Colors","Sizes","Icons","Specimens"];export{i as Colors,s as Default,c as Icons,u as Sizes,l as Specimens,a as Variants,C as __namedExportsOrder,b as default};
