"use client";var F=Object.defineProperty;var a=(o,i)=>F(o,"name",{value:i,configurable:!0});import{aa as _,ad as q,a7 as e,b as E,B as K,e as G,g as Q,h as p,D as A,l as w,H as M,s as H,q as U,P as s,t as z,y as u,G as m,Q as X,U as n,X as J}from"./iframe-CHdTRX1S.js";import"./preload-helper-Cc2_yIPf.js";const W=a(({currentPage:o=1,setCurrentPage:i,onChange:I,totalPages:t=1,showPages:d=7})=>_.useMemo(()=>{const{next:c,prev:R,pages:N}=q({current:o,total:t,show:d}),V=a(r=>l=>{if(r<1||r>t)return l.preventDefault();I?.(l,r),l.defaultPrevented||i?.(r)},"handleClick");return{pages:N.map(({page:r,current:l},O)=>({page:r||"ellipsis",itemKey:r?`page-${r}`:`ellipsis-${O}`,buttonProps:r?{"aria-current":l?"true":void 0,onClick:V(r)}:null})),prevButtonProps:{"aria-hidden":!R,onClick:V(R),variant:"tertiary"},nextButtonProps:{"aria-hidden":!c,onClick:V(c),variant:"tertiary"},hasPrev:!!R,hasNext:!!c}},[o,t,d]),"usePagination"),ae={title:"Atoms/DsComponents",tags:["autodocs"]},g={render:a(()=>e.jsx(E,{children:"This is an alert"}),"render")},h={render:a(()=>e.jsx(G,{children:"Click me"}),"render")},D={render:a(()=>e.jsx(M,{children:"Sample Heading"}),"render")},x={render:a(()=>e.jsx(H,{children:"Sample paragraph text"}),"render")},P={render:a(()=>e.jsx(K,{count:15,maxCount:9}),"render")},b={render:a(()=>e.jsx(X,{"aria-label":"Loading..."}),"render")},v={render:a(()=>e.jsx(Q,{label:"Accept terms and conditions"}),"render")},C={render:a(()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(p.Radio,{name:"my-chip",defaultChecked:!0,children:"Chip Radio"}),e.jsx(p.Checkbox,{name:"my-chip",defaultChecked:!0,children:"Chip Checkbox"}),e.jsx(p.Removable,{children:"Chip Removable"}),e.jsx(p.Button,{children:"Chip Button"})]}),"render")},j={render:a(()=>e.jsxs(A,{children:[e.jsx(A.Summary,{children:"Details summary"}),e.jsx(A.Content,{children:"Details content"})]}),"render")},S={render:a(()=>e.jsxs(w.TriggerContext,{children:[e.jsx(w.Trigger,{children:"Open Dialog"}),e.jsxs(w,{children:[e.jsx(M,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(H,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),e.jsx(H,{"data-size":"sm",children:"Dialog footer"})]})]}),"render")},T={render:a(()=>e.jsx(U,{href:"#",target:"_",children:"Sample Link"}),"render")},B={render:a(()=>{const{pages:o,prevButtonProps:i,nextButtonProps:I}=W({totalPages:10,showPages:7,currentPage:1});return e.jsx(s,{children:e.jsxs(s.List,{children:[e.jsx(s.Item,{children:e.jsx(s.Button,{"aria-label":"Forrige side",...i,children:"Forrige"})}),o.map(({page:t,itemKey:d,buttonProps:c})=>e.jsx(s.Item,{children:typeof t=="number"&&e.jsx(s.Button,{...c,"aria-label":`Side ${t}`,children:t})},d)),e.jsx(s.Item,{children:e.jsx(s.Button,{"aria-label":"Neste side",...I,children:"Neste"})})]})})},"render")},k={render:a(()=>e.jsxs(z.TriggerContext,{children:[e.jsx(z.Trigger,{children:"Open Popover"}),e.jsxs(z,{children:[e.jsx(M,{children:"Popover header"}),e.jsx(H,{children:"Popover content"})]})]}),"render")},y={render:a(()=>e.jsxs(u,{children:[e.jsx(u.Input,{"aria-label":"Søk"}),e.jsx(u.Clear,{}),e.jsx(u.Button,{})]}),"render")},f={render:a(()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(m,{}),e.jsx(m,{width:"100px"}),e.jsx(m,{height:"20px"}),e.jsx(m,{width:"200px",height:"50px"})]}),"render")},L={render:a(()=>e.jsxs(n,{defaultValue:"value1",children:[e.jsxs(n.List,{children:[e.jsx(n.Tab,{value:"value1",children:"Tab 1"}),e.jsx(n.Tab,{value:"value2",children:"Tab 2"}),e.jsx(n.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(n.Panel,{value:"value1",children:"content 1"}),e.jsx(n.Panel,{value:"value2",children:"content 2"}),e.jsx(n.Panel,{value:"value3",children:"content 3"})]}),"render")},$={render:a(()=>e.jsx(J,{children:"Validation message content"}),"render")};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <DsAlert>This is an alert</DsAlert>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DsButton>Click me</DsButton>
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <DsHeading>Sample Heading</DsHeading>
}`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <DsParagraph>Sample paragraph text</DsParagraph>
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <DsBadge count={15} maxCount={9} />
}`,...P.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <DsSpinner aria-label="Loading..." />
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <DsCheckbox label="Accept terms and conditions" />
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <DsDetails>
      <DsDetails.Summary>Details summary</DsDetails.Summary>
      <DsDetails.Content>Details content</DsDetails.Content>
    </DsDetails>
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <DsLink href="#" target="_">
      Sample Link
    </DsLink>
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <DsPopover.TriggerContext>
      <DsPopover.Trigger>Open Popover</DsPopover.Trigger>
      <DsPopover>
        <DsHeading>Popover header</DsHeading>
        <DsParagraph>Popover content</DsParagraph>
      </DsPopover>
    </DsPopover.TriggerContext>
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <DsSearch>
      <DsSearch.Input aria-label="Søk" />
      <DsSearch.Clear />
      <DsSearch.Button />
    </DsSearch>
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <DsValidationMessage>Validation message content</DsValidationMessage>
}`,...$.parameters?.docs?.source}}};const re=["Alert","Button","Heading","Paragraph","Badge","Spinner","Checkbox","Chip","Details","Dialog","Link","Pagination","Popover","Search","Skeleton","Tabs","ValidationMessage"];export{g as Alert,P as Badge,h as Button,v as Checkbox,C as Chip,j as Details,S as Dialog,D as Heading,T as Link,B as Pagination,x as Paragraph,k as Popover,y as Search,f as Skeleton,b as Spinner,L as Tabs,$ as ValidationMessage,re as __namedExportsOrder,ae as default};
