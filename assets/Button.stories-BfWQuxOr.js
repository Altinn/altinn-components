var x=Object.defineProperty;var s=(t,e)=>x(t,"name",{value:e,configurable:!0});import{b as r,a5 as n,Q as p}from"./iframe-BEPBrhYh.js";import{B as m}from"./ButtonGroup-7udc4H2h.js";import{S as g}from"./Pencil-CdQx39Wx.js";import{S as B}from"./ArrowRight-CdAaftPP.js";import{S as h}from"./ArrowLeft-B8orpSEl.js";import"./preload-helper-Cc2_yIPf.js";const D={title:"Button/Button",component:r,parameters:{},args:{children:"Button"}},j=["xs","sm","md","lg"],v=["solid","tinted","outline","ghost"],a=s(t=>n.jsx(r,{...t,children:"Button"}),"Default"),i=s(t=>n.jsxs(m,{children:[n.jsx(r,{...t,children:"Default"}),n.jsx(r,{...t,variant:"tinted",children:"Tinted"}),n.jsx(r,{...t,variant:"outline",children:"Outline"}),n.jsx(r,{...t,variant:"ghost",children:"Ghost"})]}),"Variants"),u=s(t=>n.jsxs(m,{children:[n.jsx(r,{...t,color:"company",children:"Company"}),n.jsx(r,{...t,color:"person",children:"Person"}),n.jsx(r,{...t,color:"neutral",children:"Neutral"}),n.jsx(r,{...t,color:"danger",children:"Danger"}),n.jsx(r,{...t,color:"warning",children:"Warning"})]}),"Colors"),c=s(t=>n.jsxs(m,{children:[n.jsx(r,{...t,size:"xs",children:"XSmall"}),n.jsx(r,{...t,size:"sm",children:"Small"}),n.jsx(r,{...t,size:"md",children:"Medium"}),n.jsx(r,{...t,size:"lg",children:"Large"})]}),"Sizes"),l=s(t=>n.jsxs(m,{children:[n.jsx(r,{...t,icon:!0,children:n.jsx(p,{})}),n.jsx(r,{...t,icon:!0,rounded:!0,children:n.jsx(p,{})}),n.jsxs(r,{...t,children:[n.jsx(g,{}),n.jsx("span",{children:"Button"})]}),n.jsxs(r,{...t,children:[n.jsx("span",{children:"Button"}),n.jsx(B,{})]})]}),"Icons"),d=s(t=>n.jsx("div",{style:{display:"flex",flexDirection:"column",rowGap:"1rem"},children:v.map(e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",rowGap:"1rem",alignItems:"start",justifyContent:"space-between",width:"100%"},children:[n.jsx("span",{children:e}),j.map(o=>n.jsxs("div",{"data-size":o,style:{display:"flex",alignItems:"center",columnGap:"1rem"},children:[n.jsx(r,{...t,variant:e,size:o,icon:!0,children:n.jsx(p,{})}),n.jsx(r,{...t,variant:e,size:o,rounded:!0,icon:!0,children:n.jsx(p,{})}),n.jsx(r,{...t,variant:e,size:o,children:"Button"}),n.jsxs(r,{...t,variant:e,size:o,children:[n.jsx(h,{}),n.jsx("span",{children:"Button"})]}),n.jsxs(r,{...t,variant:e,size:o,children:[n.jsx("span",{children:"Button"}),n.jsx(B,{})]}),n.jsx(r,{...t,loading:!0,variant:e,size:o,children:"Loading ..."}),n.jsx(r,{...t,disabled:!0,variant:e,size:o,children:"Disabled"}),n.jsx("span",{children:o})]},o))]},e))}),"Specimens"),b=["Default","Variants","Colors","Sizes","Icons","Specimens"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: Story) => {
  return <Button {...args}>Button</Button>;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: Story) => {
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: Story) => {
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Story) => {
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Story) => {
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: Story) => {
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
}`,...d.parameters?.docs?.source}}};export{u as Colors,a as Default,l as Icons,c as Sizes,d as Specimens,i as Variants,b as __namedExportsOrder,D as default};
