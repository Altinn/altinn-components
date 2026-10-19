"use client";var ee=Object.defineProperty;var n=(t,s)=>ee(t,"name",{value:s,configurable:!0});import{aa as m,af as te,R as V,a7 as e,c as I,I as Y}from"./iframe-BhbNl8M-.js";import{S as c}from"./TeddyBear-DGOfjC8q.js";import{S as $}from"./Cog-BA6mkyuG.js";import{S as Q}from"./ClockDashed-CjBrcx7s.js";import{S as x}from"./Pencil-BF3VQhmx.js";import{L as i}from"./ListItem-BZwC__IQ.js";import{L as l}from"./List-CK1afVUo.js";import{S as D}from"./Section-w9Om4z74.js";import{C as W}from"./ContextMenu-Ij8B0w81.js";import{S as se}from"./Switch-HPZGYIQM.js";import{A as ne}from"./AvatarGroup-B4pMcHMh.js";import{A as F}from"./Avatar-BNyDKZi7.js";var ie=function(t,s){var a={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&s.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)s.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(a[o[r]]=t[o[r]]);return a};const K=m.forwardRef((t,s)=>{var{title:a,titleId:o}=t,r=ie(t,["title","titleId"]);let u=te();return u=a?o||"title-"+u:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":u},r),a?V.createElement("title",{id:u},a):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.33 2.992a.75.75 0 0 1-.607.87A7.25 7.25 0 0 0 5.75 11v.11l-1.242 4.14H6a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-.75H8A2.75 2.75 0 0 1 5.25 18v-1.25H3.5a.75.75 0 0 1-.718-.966l1.469-4.897a8.75 8.75 0 0 1 7.21-8.502.75.75 0 0 1 .869.607m8.333 5.583a.75.75 0 0 1 .891.576A8.8 8.8 0 0 1 21.75 11a8.72 8.72 0 0 1-2 5.568V21.5a.75.75 0 0 1-1.5 0v-5.492l.188-.213A7.22 7.22 0 0 0 20.25 11a7.3 7.3 0 0 0-.162-1.534.75.75 0 0 1 .575-.89M15.25 2.75a3 3 0 0 0-2.959 2.5h-.041a2 2 0 1 0 0 4h5.5a2.5 2.5 0 0 0 .1-4.998 3 3 0 0 0-2.6-1.502m-1.5 3a1.5 1.5 0 0 1 2.915-.5c.106.3.39.5.707.5h.378a1 1 0 1 1 0 2h-5.5a.5.5 0 0 1 0-1H13a.75.75 0 0 0 .75-.75z",clipRule:"evenodd"}))}),{expect:d,userEvent:p,within:J}=__STORYBOOK_MODULE_TEST__,U=["default","subtle","tinted"],q=["xs","sm","md","lg","xl"],X=["none","xs","sm","md","lg"],Z=["none","solid","dotted"],M={items:[{name:"Alfa"},{name:"Beta"},{name:"Charlie"}]},ae={title:"List/ListItem",component:i,parameters:{},args:{title:"Title",description:"Description",variant:"default",size:"md",shadow:"xs",border:"none",loading:!1,selected:!1,expanded:!1,collapsible:!1,linkIcon:!0,interactive:!0,disabled:!1,icon:{theme:"surface",svgElement:c},badge:{theme:"subtle",label:"New"}},argTypes:{variant:{control:"select",options:U},size:{control:"select",options:q},shadow:{control:"select",options:X},border:{control:"select",options:Z},title:{control:"text"},description:{control:"text"},loading:{control:"boolean"},selected:{control:"boolean"},expanded:{control:"boolean"},collapsible:{control:"boolean"},linkIcon:{control:"boolean"},interactive:{control:"boolean"},disabled:{control:"boolean"},as:{control:"select",options:["button","div","a","li"]},icon:{control:!1},badge:{control:!1},children:{control:!1},onClick:{control:!1}}},b={render:n(t=>e.jsx(l,{children:e.jsx(i,{...t})}),"render")},v={render:n(t=>e.jsxs(l,{children:[e.jsx(i,{...t,icon:c}),e.jsx(i,{...t,icon:{theme:"surface",svgElement:c}})]}),"render")},L={render:n(t=>e.jsxs(l,{children:[e.jsx(i,{...t,icon:{type:"person",name:"Erik Huseklepp"}}),e.jsx(i,{...t,icon:{type:"company",name:"Sportsklubben Brann"}}),e.jsx(i,{...t,icon:{type:"company",name:"Politiets sikkerhetstjeneste",imageUrl:"https://media.licdn.com/dms/image/v2/D4D0BAQH7Yv86kmHN5g/company-logo_200_200/company-logo_200_200/0/1688735908848?e=1738195200&v=beta&t=f-Mkzd03bqzdQN4IT0h89VQ9_Jri1iJ6XphYYnjsgEo"}})]}),"render")},j=n(t=>e.jsxs(l,{children:[e.jsx(i,{...t,icon:{...M,defaultType:"person"}}),e.jsx(i,{...t,icon:{...M,defaultType:"company"}})]}),"AvatarGroups"),f=n(t=>e.jsx(l,{children:e.jsx(i,{...t,highlightWords:["huseklepp","brann"],title:"Erik Huseklepp",description:"Tidligere Brann-spiller.",icon:{type:"person",name:"Erik Huseklepp"}})}),"HighlightWords"),C=n(t=>{const[s,a]=m.useState(!1),o=n(()=>{a(r=>!r)},"toggleExpanded");return e.jsxs(l,{children:[e.jsx(i,{...t,icon:c,description:"This item is a link.",linkIcon:!0}),e.jsx(i,{...t,icon:c,badge:{label:"2 ting"},description:"Adding a badge.",collapsible:!0,expanded:s,onClick:o})]})},"Badges"),y={render:n(t=>e.jsxs(l,{children:[e.jsx(i,{...t,loading:!0}),e.jsx(i,{...t,loading:!1})]}),"render"),args:{icon:c}},B=n(t=>e.jsxs(l,{children:[e.jsx(i,{...t,select:{"aria-label":"Label",name:"select"}}),e.jsx(i,{...t,select:{"aria-label":"Label",name:"select",checked:!0},selected:!0})]}),"Selectable"),S=n(t=>{const[s,a]=m.useState(!1),o=n(()=>{a(r=>!r)},"onToggle");return e.jsx(l,{children:e.jsx(i,{...t,icon:{theme:"surface",svgElement:c},badge:{label:"Badge"},description:s?"":"Click to expand",collapsible:!0,expanded:s,onClick:o,as:"button",children:s&&e.jsx(D,{padding:4,children:e.jsx("p",{children:"Item is expanded"})})})})},"Collapsible"),T=n(t=>e.jsx(l,{children:e.jsx(i,{...t,icon:{theme:"surface",svgElement:c},badge:{label:"Badge"},collapsible:!0,expanded:!0,selected:!0,as:"button",children:e.jsx(D,{padding:4,children:e.jsx("p",{children:"Item is expanded and selected"})})})}),"CollapsibleExpanded"),w=n(()=>e.jsx(l,{children:e.jsx(i,{title:"Non-interactive",icon:{theme:"surface",svgElement:c},badge:{label:"Badge"},interactive:!1,children:e.jsx(D,{padding:4,children:e.jsx("p",{children:"Item is expanded and selected"})})})}),"NonInteractive"),E={render:n(t=>e.jsx(l,{children:U?.map(s=>e.jsx(i,{...t,title:s,description:`Variant: ${s}`,variant:s,shadow:"none",linkIcon:!0},s))}),"render"),args:{icon:c}},z=n(t=>e.jsx(l,{children:X?.map(s=>e.jsx(e.Fragment,{children:m.createElement(i,{...t,icon:c,title:s,description:"Shadow:"+s,shadow:s,linkIcon:!0,key:s})}))}),"Shadows"),P=n(t=>e.jsx(l,{children:Z?.map(s=>e.jsx(e.Fragment,{children:m.createElement(i,{...t,icon:c,title:s,description:"Border:"+s,border:s,linkIcon:!0,key:s})}))}),"Border"),A=n(t=>e.jsx(l,{children:q?.map(s=>m.createElement(i,{...t,icon:{svgElement:c,theme:"surface"},title:s,description:"Size: "+s,size:s,linkIcon:!0,key:s}))}),"Sizes"),H=n(t=>e.jsxs(l,{children:[e.jsx(i,{...t,description:"Custom icon with Avatar + Icon",icon:e.jsxs("span",{children:[e.jsx(F,{name:"Alfa",size:"md"}),e.jsx(Y,{svgElement:c,theme:"surface",style:{position:"absolute",bottom:-4,right:-4,fontSize:".5em"}})]})}),e.jsx(i,{...t,description:"Custom icon with Icon + Avatar",icon:e.jsxs("span",{children:[e.jsx(Y,{svgElement:c,theme:"surface"}),e.jsx(F,{name:"Alfa",size:"xs",style:{position:"absolute",bottom:-4,right:-4}})]})})]}),"OverridingIcon"),O=n(t=>e.jsx(l,{children:e.jsx(i,{...t,description:"Badge replaced by AvatarGroup",badge:e.jsx(ne,{...M,size:"sm"}),linkIcon:!0})}),"OverridingBadge"),_=n(t=>e.jsx(l,{children:e.jsx(i,{...t,icon:c,label:e.jsxs("span",{children:["A ",e.jsx("em",{children:"custom"})," label"," "]})})}),"OverridingLabel"),N=n(t=>e.jsxs(l,{children:[e.jsx(i,{...t,icon:c,linkIcon:!0,as:"a",onClick:n(()=>alert("ListItem clicked"),"onClick"),badge:e.jsx(W,{id:"menu-2",items:[{id:"settings",title:"Innstillinger",icon:$},{id:"log",title:"Aktivitetslogg",icon:Q}]})}),e.jsx(i,{...t,icon:c,badge:{label:"New",theme:"subtle"},onClick:n(()=>alert("ListItem clicked"),"onClick"),as:"a",controls:e.jsx(W,{id:"menu",items:[{id:"settings",title:"Innstillinger",icon:$},{id:"log",title:"Aktivitetslogg",icon:Q}]})}),e.jsx(i,{...t,icon:c,controls:e.jsxs(I,{size:"xs",variant:"outline",onClick:n(()=>alert("Button clicked"),"onClick"),children:[e.jsx(x,{}),e.jsx("span",{children:"Rediger"})]}),badge:void 0,onClick:n(()=>alert("ListItem clicked"),"onClick"),as:"button"}),e.jsx(i,{...t,interactive:!1,icon:c,controls:e.jsxs(I,{size:"xs",variant:"outline",onClick:n(()=>alert("Button clicked"),"onClick"),children:[e.jsx(x,{}),e.jsx("span",{children:"Rediger"})]}),linkIcon:!1,badge:void 0,onClick:n(()=>alert("ListItem clicked"),"onClick"),as:"button"}),e.jsx(i,{...t,interactive:!1,icon:c,controls:e.jsxs(e.Fragment,{children:[e.jsxs(I,{size:"xs",variant:"outline",onClick:n(()=>alert("Button 1"),"onClick"),children:[e.jsx(x,{}),e.jsx("span",{children:"1"})]}),e.jsxs(I,{size:"xs",variant:"outline",onClick:n(()=>alert("Button 2"),"onClick"),children:[e.jsx(x,{}),e.jsx("span",{children:"2"})]}),e.jsxs(I,{size:"xs",variant:"outline",onClick:n(()=>alert("Button 3"),"onClick"),children:[e.jsx(x,{}),e.jsx("span",{children:"3"})]})]}),linkIcon:!1,badge:void 0}),e.jsx(i,{...t,interactive:!1,icon:c,controls:e.jsx(se,{label:"Yes, go!",size:"sm"}),linkIcon:!1,badge:void 0})]}),"CustomControls"),R=n(t=>e.jsxs(l,{children:[e.jsx(i,{...t,icon:K,title:"Title as h2"}),e.jsx(i,{...t,icon:K,title:{as:"h3",children:"Title as H3"}}),e.jsx(i,{...t,icon:K,title:{as:"p",children:"Title as P"}}),e.jsx(i,{...t,icon:K,title:{as:"span",children:"Title as span"}})]}),"OverrideTitleAs"),h=n(t=>{const[s,a]=m.useState(0),[o,r]=m.useState(0),u=n(()=>{a(G=>G+1)},"handleListItemClick"),g=n(()=>{r(G=>G+1)},"handleButtonClick");return e.jsx(D,{children:e.jsx(l,{children:e.jsx(i,{...t,icon:c,title:"Interactive ListItem with Controls",description:`ListItem clicks: ${s}, Button clicks: ${o}`,onClick:u,controls:e.jsxs(I,{size:"xs",variant:"outline",onClick:g,children:[e.jsx(x,{}),e.jsx("span",{children:"Edit"})]}),as:"button"})})})},"InteractiveWithControls");h.play=async({canvasElement:t})=>{const s=J(t),a=s.getByText("Interactive ListItem with Controls"),o=s.getByText("Edit"),r=a.closest("button");await d(a).toBeVisible(),await d(o).toBeVisible(),await d(r).toBeVisible(),await d(r).toHaveTextContent("ListItem clicks: 0, Button clicks: 0"),await p.click(o),await d(r).toHaveTextContent("ListItem clicks: 0, Button clicks: 1"),await p.click(r),await d(r).toHaveTextContent("ListItem clicks: 1, Button clicks: 1"),await p.click(o),await d(r).toHaveTextContent("ListItem clicks: 1, Button clicks: 2"),await p.click(r),await d(r).toHaveTextContent("ListItem clicks: 2, Button clicks: 2")};const k=n(t=>{const[s,a]=m.useState([]),o=n(()=>{a(g=>[...g,"listitem-click"])},"handleListItemClick"),r=n(()=>{a(g=>[...g,"button-click"])},"handleButtonClick"),u=n(()=>{a(g=>[...g,"listitem-keypress"])},"handleKeyPress");return e.jsx(D,{children:e.jsx(l,{children:e.jsx(i,{...t,icon:c,title:"Keyboard Navigation Test",description:`Interactions: ${s.join(", ")}`,onClick:o,onKeyPress:u,controls:e.jsxs(I,{size:"xs",variant:"outline",onClick:r,children:[e.jsx(x,{}),e.jsx("span",{children:"Edit"})]}),as:"button"})})})},"KeyboardNavigation");k.play=async({canvasElement:t})=>{const s=J(t),a=s.getByRole("button",{name:/Keyboard Navigation Test/i}),o=s.getByRole("button",{name:/Edit/i});a.focus(),await p.keyboard("{Enter}"),await d(a).toHaveTextContent("listitem-keypress"),await d(a).toHaveTextContent("listitem-click"),await p.keyboard("{Tab}"),await d(o).toHaveFocus(),await p.keyboard("{Enter}"),await d(a).toHaveTextContent("button-click"),await p.keyboard("{Shift>}{Tab}{/Shift}"),await d(a).toHaveFocus(),await p.keyboard(" "),await d(a).toHaveTextContent("listitem-click"),await d(a).toHaveTextContent("listitem-keypress")};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <ListItem {...args} />
    </List>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <ListItem {...args} icon={TeddyBearIcon} />
      <ListItem {...args} icon={{
      theme: 'surface',
      svgElement: TeddyBearIcon
    }} />
    </List>
}`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <ListItem {...args} icon={{
      type: 'person',
      name: 'Erik Huseklepp'
    }} />
      <ListItem {...args} icon={{
      type: 'company',
      name: 'Sportsklubben Brann'
    }} />
      <ListItem {...args} icon={{
      type: 'company',
      name: 'Politiets sikkerhetstjeneste',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQH7Yv86kmHN5g/company-logo_200_200/company-logo_200_200/0/1688735908848?e=1738195200&v=beta&t=f-Mkzd03bqzdQN4IT0h89VQ9_Jri1iJ6XphYYnjsgEo'
    }} />
    </List>
}`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} icon={{
      ...avatarGroupsProps,
      defaultType: 'person'
    }} />
      <ListItem {...args} icon={{
      ...avatarGroupsProps,
      defaultType: 'company'
    }} />
    </List>;
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} highlightWords={['huseklepp', 'brann']} title="Erik Huseklepp" description="Tidligere Brann-spiller." icon={{
      type: 'person',
      name: 'Erik Huseklepp'
    }} />
    </List>;
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(prevState => !prevState);
  };
  return <List>
      <ListItem {...args} icon={TeddyBearIcon} description="This item is a link." linkIcon />
      <ListItem {...args} icon={TeddyBearIcon} badge={{
      label: '2 ting'
    }} description="Adding a badge." collapsible expanded={expanded} onClick={toggleExpanded} />
    </List>;
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <ListItem {...args} loading={true} />
      <ListItem {...args} loading={false} />
    </List>,
  args: {
    icon: TeddyBearIcon
  }
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} select={{
      'aria-label': 'Label',
      name: 'select'
    }} />
      <ListItem {...args} select={{
      'aria-label': 'Label',
      name: 'select',
      checked: true
    }} selected={true} />
    </List>;
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const onToggle = () => {
    setExpanded(prevState => !prevState);
  };
  return <List>
      <ListItem {...args} icon={{
      theme: 'surface',
      svgElement: TeddyBearIcon
    }} badge={{
      label: 'Badge'
    }} description={expanded ? '' : 'Click to expand'} collapsible={true} expanded={expanded} onClick={onToggle} as="button">
        {expanded && <Section padding={4}>
            <p>Item is expanded</p>
          </Section>}
      </ListItem>
    </List>;
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} icon={{
      theme: 'surface',
      svgElement: TeddyBearIcon
    }} badge={{
      label: 'Badge'
    }} collapsible={true} expanded={true} selected={true} as="button">
        <Section padding={4}>
          <p>Item is expanded and selected</p>
        </Section>
      </ListItem>
    </List>;
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <List>
      <ListItem title="Non-interactive" icon={{
      theme: 'surface',
      svgElement: TeddyBearIcon
    }} badge={{
      label: 'Badge'
    }} interactive={false}>
        <Section padding={4}>
          <p>Item is expanded and selected</p>
        </Section>
      </ListItem>
    </List>;
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      {variants?.map(variant => <ListItem key={variant} {...args} title={variant} description={\`Variant: \${variant}\`} variant={variant} shadow="none" linkIcon />)}
    </List>,
  args: {
    icon: TeddyBearIcon
  }
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {shadows?.map(shadow => {
      return <>
            <ListItem {...args} icon={TeddyBearIcon} title={shadow} description={'Shadow:' + shadow} shadow={shadow} linkIcon key={shadow} />
          </>;
    })}
    </List>;
}`,...z.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {borders?.map(border => {
      return <>
            <ListItem {...args} icon={TeddyBearIcon} title={border} description={'Border:' + border} border={border} linkIcon key={border} />
          </>;
    })}
    </List>;
}`,...P.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {sizes?.map(size => {
      return <ListItem {...args} icon={{
        svgElement: TeddyBearIcon,
        theme: 'surface'
      }} title={size} description={'Size: ' + size} size={size} linkIcon key={size} />;
    })}
    </List>;
}`,...A.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} description="Custom icon with Avatar + Icon" icon={<span>
            <Avatar name="Alfa" size="md" />
            <Icon svgElement={TeddyBearIcon} theme="surface" style={{
        position: 'absolute',
        bottom: -4,
        right: -4,
        fontSize: '.5em'
      }} />
          </span>} />
      <ListItem {...args} description="Custom icon with Icon + Avatar" icon={<span>
            <Icon svgElement={TeddyBearIcon} theme="surface" />
            <Avatar name="Alfa" size="xs" style={{
        position: 'absolute',
        bottom: -4,
        right: -4
      }} />
          </span>} />
    </List>;
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} description="Badge replaced by AvatarGroup" badge={<AvatarGroup {...avatarGroupsProps} size="sm" />} linkIcon />
    </List>;
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} icon={TeddyBearIcon} label={<span>
            A <em>custom</em> label{' '}
          </span>} />
    </List>;
}`,..._.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} icon={TeddyBearIcon} linkIcon as="a" onClick={() => alert('ListItem clicked')} badge={<ContextMenu id="menu-2" items={[{
      id: 'settings',
      title: 'Innstillinger',
      icon: CogIcon
    }, {
      id: 'log',
      title: 'Aktivitetslogg',
      icon: ClockDashedIcon
    }]} />} />
      <ListItem {...args} icon={TeddyBearIcon} badge={{
      label: 'New',
      theme: 'subtle'
    }} onClick={() => alert('ListItem clicked')} as="a" controls={<ContextMenu id="menu" items={[{
      id: 'settings',
      title: 'Innstillinger',
      icon: CogIcon
    }, {
      id: 'log',
      title: 'Aktivitetslogg',
      icon: ClockDashedIcon
    }]} />} />
      <ListItem {...args} icon={TeddyBearIcon} controls={<Button size="xs" variant="outline" onClick={() => alert('Button clicked')}>
            <PencilIcon />
            <span>Rediger</span>
          </Button>} badge={undefined} onClick={() => alert('ListItem clicked')} as={'button'} />

      <ListItem {...args} interactive={false} icon={TeddyBearIcon} controls={<Button size="xs" variant="outline" onClick={() => alert('Button clicked')}>
            <PencilIcon />
            <span>Rediger</span>
          </Button>} linkIcon={false} badge={undefined} onClick={() => alert('ListItem clicked')} as={'button'} />

      <ListItem {...args} interactive={false} icon={TeddyBearIcon} controls={<>
            <Button size="xs" variant="outline" onClick={() => alert('Button 1')}>
              <PencilIcon />
              <span>1</span>
            </Button>
            <Button size="xs" variant="outline" onClick={() => alert('Button 2')}>
              <PencilIcon />
              <span>2</span>
            </Button>
            <Button size="xs" variant="outline" onClick={() => alert('Button 3')}>
              <PencilIcon />
              <span>3</span>
            </Button>
          </>} linkIcon={false} badge={undefined} />
      <ListItem {...args} interactive={false} icon={TeddyBearIcon} controls={<Switch label="Yes, go!" size="sm" />} linkIcon={false} badge={undefined} />
    </List>;
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} icon={HeadCloudIcon} title="Title as h2" />
      <ListItem {...args} icon={HeadCloudIcon} title={{
      as: 'h3',
      children: 'Title as H3'
    }} />
      <ListItem {...args} icon={HeadCloudIcon} title={{
      as: 'p',
      children: 'Title as P'
    }} />
      <ListItem {...args} icon={HeadCloudIcon} title={{
      as: 'span',
      children: 'Title as span'
    }} />
    </List>;
}`,...R.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  const [listItemClicks, setListItemClicks] = useState(0);
  const [buttonClicks, setButtonClicks] = useState(0);
  const handleListItemClick = () => {
    setListItemClicks(prev => prev + 1);
  };
  const handleButtonClick = () => {
    setButtonClicks(prev => prev + 1);
  };
  return <Section>
      <List>
        <ListItem {...args} icon={TeddyBearIcon} title="Interactive ListItem with Controls" description={\`ListItem clicks: \${listItemClicks}, Button clicks: \${buttonClicks}\`} onClick={handleListItemClick} controls={<Button size="xs" variant="outline" onClick={handleButtonClick}>
              <PencilIcon />
              <span>Edit</span>
            </Button>} as="button" />
      </List>
    </Section>;
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  const [interactions, setInteractions] = useState<string[]>([]);
  const handleListItemClick = () => {
    setInteractions(prev => [...prev, 'listitem-click']);
  };
  const handleButtonClick = () => {
    setInteractions(prev => [...prev, 'button-click']);
  };
  const handleKeyPress = () => {
    setInteractions(prev => [...prev, 'listitem-keypress']);
  };
  return <Section>
      <List>
        <ListItem {...args} icon={TeddyBearIcon} title="Keyboard Navigation Test" description={\`Interactions: \${interactions.join(', ')}\`} onClick={handleListItemClick} onKeyPress={handleKeyPress} controls={<Button size="xs" variant="outline" onClick={handleButtonClick}>
              <PencilIcon />
              <span>Edit</span>
            </Button>} as="button" />
      </List>
    </Section>;
}`,...k.parameters?.docs?.source}}};const oe=["Default","IconTypes","Avatars","AvatarGroups","HighlightWords","Badges","LoadingState","Selectable","Collapsible","CollapsibleExpanded","NonInteractive","Variants","Shadows","Border","Sizes","OverridingIcon","OverridingBadge","OverridingLabel","CustomControls","OverrideTitleAs","InteractiveWithControls","KeyboardNavigation"],ve=Object.freeze(Object.defineProperty({__proto__:null,AvatarGroups:j,Avatars:L,Badges:C,Border:P,Collapsible:S,CollapsibleExpanded:T,CustomControls:N,Default:b,HighlightWords:f,IconTypes:v,InteractiveWithControls:h,KeyboardNavigation:k,LoadingState:y,NonInteractive:w,OverrideTitleAs:R,OverridingBadge:O,OverridingIcon:H,OverridingLabel:_,Selectable:B,Shadows:z,Sizes:A,Variants:E,__namedExportsOrder:oe,default:ae},Symbol.toStringTag,{value:"Module"}));export{j as A,C as B,S as C,b as D,v as I,ve as L,O,B as S,L as a,N as b,y as c,H as d,_ as e};
