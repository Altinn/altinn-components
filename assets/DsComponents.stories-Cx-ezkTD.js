"use client";import{aa as O,ad as F,a7 as e,b as _,B as q,e as E,g as K,h as l,D as V,l as A,H as z,s as L,q as G,P as r,t as w,y as d,G as p,Q,U as s,X as U}from"./iframe-3eub8g81.js";import"./preload-helper-PPVm8Dsz.js";const X=({currentPage:i=1,setCurrentPage:$,onChange:H,totalPages:n=1,showPages:c=7})=>O.useMemo(()=>{const{next:t,prev:I,pages:M}=F({current:i,total:n,show:c}),R=a=>o=>{if(a<1||a>n)return o.preventDefault();H?.(o,a),o.defaultPrevented||$?.(a)};return{pages:M.map(({page:a,current:o},N)=>({page:a||"ellipsis",itemKey:a?`page-${a}`:`ellipsis-${N}`,buttonProps:a?{"aria-current":o?"true":void 0,onClick:R(a)}:null})),prevButtonProps:{"aria-hidden":!I,onClick:R(I),variant:"tertiary"},nextButtonProps:{"aria-hidden":!t,onClick:R(t),variant:"tertiary"},hasPrev:!!I,hasNext:!!t}},[i,n,c]),Y={title:"Atoms/DsComponents",tags:["autodocs"]},u={render:()=>e.jsx(_,{children:"This is an alert"})},m={render:()=>e.jsx(E,{children:"Click me"})},g={render:()=>e.jsx(z,{children:"Sample Heading"})},h={render:()=>e.jsx(L,{children:"Sample paragraph text"})},D={render:()=>e.jsx(q,{count:15,maxCount:9})},x={render:()=>e.jsx(Q,{"aria-label":"Loading..."})},P={render:()=>e.jsx(K,{label:"Accept terms and conditions"})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l.Radio,{name:"my-chip",defaultChecked:!0,children:"Chip Radio"}),e.jsx(l.Checkbox,{name:"my-chip",defaultChecked:!0,children:"Chip Checkbox"}),e.jsx(l.Removable,{children:"Chip Removable"}),e.jsx(l.Button,{children:"Chip Button"})]})},v={render:()=>e.jsxs(V,{children:[e.jsx(V.Summary,{children:"Details summary"}),e.jsx(V.Content,{children:"Details content"})]})},C={render:()=>e.jsxs(A.TriggerContext,{children:[e.jsx(A.Trigger,{children:"Open Dialog"}),e.jsxs(A,{children:[e.jsx(z,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(L,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),e.jsx(L,{"data-size":"sm",children:"Dialog footer"})]})]})},j={render:()=>e.jsx(G,{href:"#",target:"_",children:"Sample Link"})},S={render:()=>{const{pages:i,prevButtonProps:$,nextButtonProps:H}=X({totalPages:10,showPages:7,currentPage:1});return e.jsx(r,{children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Button,{"aria-label":"Forrige side",...$,children:"Forrige"})}),i.map(({page:n,itemKey:c,buttonProps:t})=>e.jsx(r.Item,{children:typeof n=="number"&&e.jsx(r.Button,{...t,"aria-label":`Side ${n}`,children:n})},c)),e.jsx(r.Item,{children:e.jsx(r.Button,{"aria-label":"Neste side",...H,children:"Neste"})})]})})}},T={render:()=>e.jsxs(w.TriggerContext,{children:[e.jsx(w.Trigger,{children:"Open Popover"}),e.jsxs(w,{children:[e.jsx(z,{children:"Popover header"}),e.jsx(L,{children:"Popover content"})]})]})},B={render:()=>e.jsxs(d,{children:[e.jsx(d.Input,{"aria-label":"Søk"}),e.jsx(d.Clear,{}),e.jsx(d.Button,{})]})},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(p,{}),e.jsx(p,{width:"100px"}),e.jsx(p,{height:"20px"}),e.jsx(p,{width:"200px",height:"50px"})]})},y={render:()=>e.jsxs(s,{defaultValue:"value1",children:[e.jsxs(s.List,{children:[e.jsx(s.Tab,{value:"value1",children:"Tab 1"}),e.jsx(s.Tab,{value:"value2",children:"Tab 2"}),e.jsx(s.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(s.Panel,{value:"value1",children:"content 1"}),e.jsx(s.Panel,{value:"value2",children:"content 2"}),e.jsx(s.Panel,{value:"value3",children:"content 3"})]})},f={render:()=>e.jsx(U,{children:"Validation message content"})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <DsAlert>This is an alert</DsAlert>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <DsButton>Click me</DsButton>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <DsHeading>Sample Heading</DsHeading>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DsParagraph>Sample paragraph text</DsParagraph>
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <DsBadge count={15} maxCount={9} />
}`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <DsSpinner aria-label="Loading..." />
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <DsCheckbox label="Accept terms and conditions" />
}`,...P.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <DsChip.Radio name="my-chip" defaultChecked>
        Chip Radio
      </DsChip.Radio>
      <DsChip.Checkbox name="my-chip" defaultChecked>
        Chip Checkbox
      </DsChip.Checkbox>
      <DsChip.Removable>Chip Removable</DsChip.Removable>
      <DsChip.Button>Chip Button</DsChip.Button>
    </div>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <DsDetails>
      <DsDetails.Summary>Details summary</DsDetails.Summary>
      <DsDetails.Content>Details content</DsDetails.Content>
    </DsDetails>
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <DsDialog.TriggerContext>
      <DsDialog.Trigger>Open Dialog</DsDialog.Trigger>
      <DsDialog>
        <DsHeading style={{
        marginBottom: 'var(--ds-size-2)'
      }}>
          Dialog header
        </DsHeading>
        <DsParagraph style={{
        marginBottom: 'var(--ds-size-2)'
      }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio
          ducimus sunt et.
        </DsParagraph>
        <DsParagraph data-size="sm">Dialog footer</DsParagraph>
      </DsDialog>
    </DsDialog.TriggerContext>
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <DsLink href="#" target="_">
      Sample Link
    </DsLink>
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      pages,
      prevButtonProps,
      nextButtonProps
    } = useDsPagination({
      totalPages: 10,
      showPages: 7,
      currentPage: 1
    });
    return <DsPagination>
        <DsPagination.List>
          <DsPagination.Item>
            <DsPagination.Button aria-label="Forrige side" {...prevButtonProps}>
              Forrige
            </DsPagination.Button>
          </DsPagination.Item>
          {pages.map(({
          page,
          itemKey,
          buttonProps
        }) => <DsPagination.Item key={itemKey}>
              {typeof page === 'number' && <DsPagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>
                  {page}
                </DsPagination.Button>}
            </DsPagination.Item>)}
          <DsPagination.Item>
            <DsPagination.Button aria-label="Neste side" {...nextButtonProps}>
              Neste
            </DsPagination.Button>
          </DsPagination.Item>
        </DsPagination.List>
      </DsPagination>;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <DsPopover.TriggerContext>
      <DsPopover.Trigger>Open Popover</DsPopover.Trigger>
      <DsPopover>
        <DsHeading>Popover header</DsHeading>
        <DsParagraph>Popover content</DsParagraph>
      </DsPopover>
    </DsPopover.TriggerContext>
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <DsSearch>
      <DsSearch.Input aria-label="Søk" />
      <DsSearch.Clear />
      <DsSearch.Button />
    </DsSearch>
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <DsSkeleton />
      <DsSkeleton width="100px" />
      <DsSkeleton height="20px" />
      <DsSkeleton width="200px" height="50px" />
    </div>
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <DsTabs defaultValue="value1">
      <DsTabs.List>
        <DsTabs.Tab value="value1">Tab 1</DsTabs.Tab>
        <DsTabs.Tab value="value2">Tab 2</DsTabs.Tab>
        <DsTabs.Tab value="value3">Tab 3</DsTabs.Tab>
      </DsTabs.List>
      <DsTabs.Panel value="value1">content 1</DsTabs.Panel>
      <DsTabs.Panel value="value2">content 2</DsTabs.Panel>
      <DsTabs.Panel value="value3">content 3</DsTabs.Panel>
    </DsTabs>
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <DsValidationMessage>Validation message content</DsValidationMessage>
}`,...f.parameters?.docs?.source}}};const Z=["Alert","Button","Heading","Paragraph","Badge","Spinner","Checkbox","Chip","Details","Dialog","Link","Pagination","Popover","Search","Skeleton","Tabs","ValidationMessage"];export{u as Alert,D as Badge,m as Button,P as Checkbox,b as Chip,v as Details,C as Dialog,g as Heading,j as Link,S as Pagination,h as Paragraph,T as Popover,B as Search,k as Skeleton,x as Spinner,y as Tabs,f as ValidationMessage,Z as __namedExportsOrder,Y as default};
