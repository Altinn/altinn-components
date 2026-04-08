import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./ArrowLeft-DkfTN7bK.js";import{t as n}from"./ArrowRight-DbDsNi2b.js";import{t as r}from"./Pencil-Cc5Fy69a.js";import{t as i}from"./XMark-CDYpubJK.js";import{t as a}from"./Button-L6T5IVdq.js";import{t as o}from"./ButtonGroup-qEf-oFo1.js";var s=e(),c={title:`Button/Button`,component:a,parameters:{},args:{children:`Button`}},l=[`xs`,`sm`,`md`,`lg`],u=[`solid`,`tinted`,`outline`,`ghost`],d=e=>(0,s.jsx)(a,{...e,children:`Button`}),f=e=>(0,s.jsxs)(o,{children:[(0,s.jsx)(a,{...e,children:`Default`}),(0,s.jsx)(a,{...e,variant:`tinted`,children:`Tinted`}),(0,s.jsx)(a,{...e,variant:`outline`,children:`Outline`}),(0,s.jsx)(a,{...e,variant:`ghost`,children:`Ghost`})]}),p=e=>(0,s.jsxs)(o,{children:[(0,s.jsx)(a,{...e,color:`company`,children:`Company`}),(0,s.jsx)(a,{...e,color:`person`,children:`Person`}),(0,s.jsx)(a,{...e,color:`neutral`,children:`Neutral`}),(0,s.jsx)(a,{...e,color:`danger`,children:`Danger`}),(0,s.jsx)(a,{...e,color:`warning`,children:`Warning`})]}),m=e=>(0,s.jsxs)(o,{children:[(0,s.jsx)(a,{...e,size:`xs`,children:`XSmall`}),(0,s.jsx)(a,{...e,size:`sm`,children:`Small`}),(0,s.jsx)(a,{...e,size:`md`,children:`Medium`}),(0,s.jsx)(a,{...e,size:`lg`,children:`Large`})]}),h=e=>(0,s.jsxs)(o,{children:[(0,s.jsx)(a,{...e,icon:!0,children:(0,s.jsx)(i,{})}),(0,s.jsx)(a,{...e,icon:!0,rounded:!0,children:(0,s.jsx)(i,{})}),(0,s.jsxs)(a,{...e,children:[(0,s.jsx)(r,{}),(0,s.jsx)(`span`,{children:`Button`})]}),(0,s.jsxs)(a,{...e,children:[(0,s.jsx)(`span`,{children:`Button`}),(0,s.jsx)(n,{})]})]}),g=e=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,rowGap:`1rem`},children:u.map(r=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,rowGap:`1rem`,alignItems:`start`,justifyContent:`space-between`,width:`100%`},children:[(0,s.jsx)(`span`,{children:r}),l.map(o=>(0,s.jsxs)(`div`,{"data-size":o,style:{display:`flex`,alignItems:`center`,columnGap:`1rem`},children:[(0,s.jsx)(a,{...e,variant:r,size:o,icon:!0,children:(0,s.jsx)(i,{})}),(0,s.jsx)(a,{...e,variant:r,size:o,rounded:!0,icon:!0,children:(0,s.jsx)(i,{})}),(0,s.jsx)(a,{...e,variant:r,size:o,children:`Button`}),(0,s.jsxs)(a,{...e,variant:r,size:o,children:[(0,s.jsx)(t,{}),(0,s.jsx)(`span`,{children:`Button`})]}),(0,s.jsxs)(a,{...e,variant:r,size:o,children:[(0,s.jsx)(`span`,{children:`Button`}),(0,s.jsx)(n,{})]}),(0,s.jsx)(a,{...e,loading:!0,variant:r,size:o,children:`Loading ...`}),(0,s.jsx)(a,{...e,disabled:!0,variant:r,size:o,children:`Disabled`}),(0,s.jsx)(`span`,{children:o})]},o))]},r))});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: Story) => {
  return <Button {...args}>Button</Button>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: Story) => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: Story) => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: Story) => {
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: Story) => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: Story) => {
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
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`Variants`,`Colors`,`Sizes`,`Icons`,`Specimens`];export{p as Colors,d as Default,h as Icons,m as Sizes,g as Specimens,f as Variants,_ as __namedExportsOrder,c as default};