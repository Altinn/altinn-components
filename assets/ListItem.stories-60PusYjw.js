"use client";import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-CpyhhMkF.js";import{t as r}from"./jsx-runtime-DwqL_Y-t.js";import{t as i}from"./useId-HrPGyhy9.js";import{t as a}from"./ClockDashed-td0kCU9s.js";import{t as o}from"./Cog-flszozsV.js";import{t as s}from"./Pencil-Cc5Fy69a.js";import{t as c}from"./TeddyBear-BOWHyBXM.js";import{t as l}from"./Avatar-C6_Byw56.js";import{t as u}from"./Icon-DrLPdusd.js";import{t as d}from"./AvatarGroup-ChzQcDti.js";import{t as f}from"./Switch-8Dpd7HT2.js";import{t as p}from"./ListItem-DAJg57C2.js";import{t as m}from"./Button-L6T5IVdq.js";import{t as h}from"./ContextMenu-BispZrd8.js";import{t as g}from"./List-BNjZuxCc.js";import{t as _}from"./Section-DYB-4Xyp.js";var v=e(n()),y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},b=(0,v.forwardRef)((e,t)=>{var{title:n,titleId:r}=e,a=y(e,[`title`,`titleId`]);let o=i();return o=n?r||`title-`+o:void 0,v.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`,fill:`none`,viewBox:`0 0 24 24`,focusable:!1,role:`img`,ref:t,"aria-labelledby":o},a),n?v.createElement(`title`,{id:o},n):null,v.createElement(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M12.33 2.992a.75.75 0 0 1-.607.87A7.25 7.25 0 0 0 5.75 11v.11l-1.242 4.14H6a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-.75H8A2.75 2.75 0 0 1 5.25 18v-1.25H3.5a.75.75 0 0 1-.718-.966l1.469-4.897a8.75 8.75 0 0 1 7.21-8.502.75.75 0 0 1 .869.607m8.333 5.583a.75.75 0 0 1 .891.576A8.8 8.8 0 0 1 21.75 11a8.72 8.72 0 0 1-2 5.568V21.5a.75.75 0 0 1-1.5 0v-5.492l.188-.213A7.22 7.22 0 0 0 20.25 11a7.3 7.3 0 0 0-.162-1.534.75.75 0 0 1 .575-.89M15.25 2.75a3 3 0 0 0-2.959 2.5h-.041a2 2 0 1 0 0 4h5.5a2.5 2.5 0 0 0 .1-4.998 3 3 0 0 0-2.6-1.502m-1.5 3a1.5 1.5 0 0 1 2.915-.5c.106.3.39.5.707.5h.378a1 1 0 1 1 0 2h-5.5a.5.5 0 0 1 0-1H13a.75.75 0 0 0 .75-.75z`,clipRule:`evenodd`}))}),ee=t({AvatarGroups:()=>P,Avatars:()=>N,Badges:()=>I,Border:()=>W,Collapsible:()=>z,CollapsibleExpanded:()=>B,CustomControls:()=>Y,Default:()=>j,HighlightWords:()=>F,IconTypes:()=>M,InteractiveWithControls:()=>Z,KeyboardNavigation:()=>Q,LoadingState:()=>L,NonInteractive:()=>V,OverrideTitleAs:()=>X,OverridingBadge:()=>q,OverridingIcon:()=>K,OverridingLabel:()=>J,Selectable:()=>R,Shadows:()=>U,Sizes:()=>G,Variants:()=>H,__namedExportsOrder:()=>$,default:()=>A}),x=r(),{expect:S,userEvent:C,within:w}=__STORYBOOK_MODULE_TEST__,T=[`default`,`subtle`,`tinted`],E=[`xs`,`sm`,`md`,`lg`,`xl`],D=[`none`,`xs`,`sm`,`md`,`lg`],O=[`none`,`solid`,`dotted`],k={items:[{name:`Alfa`},{name:`Beta`},{name:`Charlie`}]},A={title:`List/ListItem`,component:p,parameters:{},args:{title:`Title`,description:`Description`,variant:`default`,size:`md`,shadow:`xs`,border:`none`,loading:!1,selected:!1,expanded:!1,collapsible:!1,linkIcon:!0,interactive:!0,disabled:!1,icon:{theme:`surface`,svgElement:c},badge:{theme:`subtle`,label:`New`}},argTypes:{variant:{control:`select`,options:T},size:{control:`select`,options:E},shadow:{control:`select`,options:D},border:{control:`select`,options:O},title:{control:`text`},description:{control:`text`},loading:{control:`boolean`},selected:{control:`boolean`},expanded:{control:`boolean`},collapsible:{control:`boolean`},linkIcon:{control:`boolean`},interactive:{control:`boolean`},disabled:{control:`boolean`},as:{control:`select`,options:[`button`,`div`,`a`,`li`]},icon:{control:!1},badge:{control:!1},children:{control:!1},onClick:{control:!1}}},j={render:e=>(0,x.jsx)(g,{children:(0,x.jsx)(p,{...e})})},M={render:e=>(0,x.jsxs)(g,{children:[(0,x.jsx)(p,{...e,icon:c}),(0,x.jsx)(p,{...e,icon:{theme:`surface`,svgElement:c}})]})},N={render:e=>(0,x.jsxs)(g,{children:[(0,x.jsx)(p,{...e,icon:{type:`person`,name:`Erik Huseklepp`}}),(0,x.jsx)(p,{...e,icon:{type:`company`,name:`Sportsklubben Brann`}}),(0,x.jsx)(p,{...e,icon:{type:`company`,name:`Politiets sikkerhetstjeneste`,imageUrl:`https://media.licdn.com/dms/image/v2/D4D0BAQH7Yv86kmHN5g/company-logo_200_200/company-logo_200_200/0/1688735908848?e=1738195200&v=beta&t=f-Mkzd03bqzdQN4IT0h89VQ9_Jri1iJ6XphYYnjsgEo`}})]})},P=e=>(0,x.jsxs)(g,{children:[(0,x.jsx)(p,{...e,icon:{...k,defaultType:`person`}}),(0,x.jsx)(p,{...e,icon:{...k,defaultType:`company`}})]}),F=e=>(0,x.jsx)(g,{children:(0,x.jsx)(p,{...e,highlightWords:[`huseklepp`,`brann`],title:`Erik Huseklepp`,description:`Tidligere Brann-spiller.`,icon:{type:`person`,name:`Erik Huseklepp`}})}),I=e=>{let[t,n]=(0,v.useState)(!1),r=()=>{n(e=>!e)};return(0,x.jsxs)(g,{children:[(0,x.jsx)(p,{...e,icon:c,description:`This item is a link.`,linkIcon:!0}),(0,x.jsx)(p,{...e,icon:c,badge:{label:`2 ting`},description:`Adding a badge.`,collapsible:!0,expanded:t,onClick:r})]})},L={render:e=>(0,x.jsxs)(g,{children:[(0,x.jsx)(p,{...e,loading:!0}),(0,x.jsx)(p,{...e,loading:!1})]}),args:{icon:c}},R=e=>(0,x.jsxs)(g,{children:[(0,x.jsx)(p,{...e,select:{"aria-label":`Label`,name:`select`}}),(0,x.jsx)(p,{...e,select:{"aria-label":`Label`,name:`select`,checked:!0},selected:!0})]}),z=e=>{let[t,n]=(0,v.useState)(!1),r=()=>{n(e=>!e)};return(0,x.jsx)(g,{children:(0,x.jsx)(p,{...e,icon:{theme:`surface`,svgElement:c},badge:{label:`Badge`},description:t?``:`Click to expand`,collapsible:!0,expanded:t,onClick:r,as:`button`,children:t&&(0,x.jsx)(_,{padding:4,children:(0,x.jsx)(`p`,{children:`Item is expanded`})})})})},B=e=>(0,x.jsx)(g,{children:(0,x.jsx)(p,{...e,icon:{theme:`surface`,svgElement:c},badge:{label:`Badge`},collapsible:!0,expanded:!0,selected:!0,as:`button`,children:(0,x.jsx)(_,{padding:4,children:(0,x.jsx)(`p`,{children:`Item is expanded and selected`})})})}),V=()=>(0,x.jsx)(g,{children:(0,x.jsx)(p,{title:`Non-interactive`,icon:{theme:`surface`,svgElement:c},badge:{label:`Badge`},interactive:!1,children:(0,x.jsx)(_,{padding:4,children:(0,x.jsx)(`p`,{children:`Item is expanded and selected`})})})}),H={render:e=>(0,x.jsx)(g,{children:T?.map(t=>(0,x.jsx)(p,{...e,title:t,description:`Variant: ${t}`,variant:t,shadow:`none`,linkIcon:!0},t))}),args:{icon:c}},U=e=>(0,x.jsx)(g,{children:D?.map(t=>(0,x.jsx)(x.Fragment,{children:(0,v.createElement)(p,{...e,icon:c,title:t,description:`Shadow:`+t,shadow:t,linkIcon:!0,key:t})}))}),W=e=>(0,x.jsx)(g,{children:O?.map(t=>(0,x.jsx)(x.Fragment,{children:(0,v.createElement)(p,{...e,icon:c,title:t,description:`Border:`+t,border:t,linkIcon:!0,key:t})}))}),G=e=>(0,x.jsx)(g,{children:E?.map(t=>(0,v.createElement)(p,{...e,icon:{svgElement:c,theme:`surface`},title:t,description:`Size: `+t,size:t,linkIcon:!0,key:t}))}),K=e=>(0,x.jsxs)(g,{children:[(0,x.jsx)(p,{...e,description:`Custom icon with Avatar + Icon`,icon:(0,x.jsxs)(`span`,{children:[(0,x.jsx)(l,{name:`Alfa`,size:`md`}),(0,x.jsx)(u,{svgElement:c,theme:`surface`,style:{position:`absolute`,bottom:-4,right:-4,fontSize:`.5em`}})]})}),(0,x.jsx)(p,{...e,description:`Custom icon with Icon + Avatar`,icon:(0,x.jsxs)(`span`,{children:[(0,x.jsx)(u,{svgElement:c,theme:`surface`}),(0,x.jsx)(l,{name:`Alfa`,size:`xs`,style:{position:`absolute`,bottom:-4,right:-4}})]})})]}),q=e=>(0,x.jsx)(g,{children:(0,x.jsx)(p,{...e,description:`Badge replaced by AvatarGroup`,badge:(0,x.jsx)(d,{...k,size:`sm`}),linkIcon:!0})}),J=e=>(0,x.jsx)(g,{children:(0,x.jsx)(p,{...e,icon:c,label:(0,x.jsxs)(`span`,{children:[`A `,(0,x.jsx)(`em`,{children:`custom`}),` label`,` `]})})}),Y=e=>(0,x.jsxs)(g,{children:[(0,x.jsx)(p,{...e,icon:c,linkIcon:!0,as:`a`,onClick:()=>alert(`ListItem clicked`),badge:(0,x.jsx)(h,{id:`menu-2`,items:[{id:`settings`,title:`Innstillinger`,icon:o},{id:`log`,title:`Aktivitetslogg`,icon:a}]})}),(0,x.jsx)(p,{...e,icon:c,badge:{label:`New`,theme:`subtle`},onClick:()=>alert(`ListItem clicked`),as:`a`,controls:(0,x.jsx)(h,{id:`menu`,items:[{id:`settings`,title:`Innstillinger`,icon:o},{id:`log`,title:`Aktivitetslogg`,icon:a}]})}),(0,x.jsx)(p,{...e,icon:c,controls:(0,x.jsxs)(m,{size:`xs`,variant:`outline`,onClick:()=>alert(`Button clicked`),children:[(0,x.jsx)(s,{}),(0,x.jsx)(`span`,{children:`Rediger`})]}),badge:void 0,onClick:()=>alert(`ListItem clicked`),as:`button`}),(0,x.jsx)(p,{...e,interactive:!1,icon:c,controls:(0,x.jsxs)(m,{size:`xs`,variant:`outline`,onClick:()=>alert(`Button clicked`),children:[(0,x.jsx)(s,{}),(0,x.jsx)(`span`,{children:`Rediger`})]}),linkIcon:!1,badge:void 0,onClick:()=>alert(`ListItem clicked`),as:`button`}),(0,x.jsx)(p,{...e,interactive:!1,icon:c,controls:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(m,{size:`xs`,variant:`outline`,onClick:()=>alert(`Button 1`),children:[(0,x.jsx)(s,{}),(0,x.jsx)(`span`,{children:`1`})]}),(0,x.jsxs)(m,{size:`xs`,variant:`outline`,onClick:()=>alert(`Button 2`),children:[(0,x.jsx)(s,{}),(0,x.jsx)(`span`,{children:`2`})]}),(0,x.jsxs)(m,{size:`xs`,variant:`outline`,onClick:()=>alert(`Button 3`),children:[(0,x.jsx)(s,{}),(0,x.jsx)(`span`,{children:`3`})]})]}),linkIcon:!1,badge:void 0}),(0,x.jsx)(p,{...e,interactive:!1,icon:c,controls:(0,x.jsx)(f,{label:`Yes, go!`,size:`sm`}),linkIcon:!1,badge:void 0})]}),X=e=>(0,x.jsxs)(g,{children:[(0,x.jsx)(p,{...e,icon:b,title:`Title as h2`}),(0,x.jsx)(p,{...e,icon:b,title:{as:`h3`,children:`Title as H3`}}),(0,x.jsx)(p,{...e,icon:b,title:{as:`p`,children:`Title as P`}}),(0,x.jsx)(p,{...e,icon:b,title:{as:`span`,children:`Title as span`}})]}),Z=e=>{let[t,n]=(0,v.useState)(0),[r,i]=(0,v.useState)(0),a=()=>{n(e=>e+1)},o=()=>{i(e=>e+1)};return(0,x.jsx)(_,{children:(0,x.jsx)(g,{children:(0,x.jsx)(p,{...e,icon:c,title:`Interactive ListItem with Controls`,description:`ListItem clicks: ${t}, Button clicks: ${r}`,onClick:a,controls:(0,x.jsxs)(m,{size:`xs`,variant:`outline`,onClick:o,children:[(0,x.jsx)(s,{}),(0,x.jsx)(`span`,{children:`Edit`})]}),as:`button`})})})};Z.play=async({canvasElement:e})=>{let t=w(e),n=t.getByText(`Interactive ListItem with Controls`),r=t.getByText(`Edit`),i=n.closest(`button`);await S(n).toBeVisible(),await S(r).toBeVisible(),await S(i).toBeVisible(),await S(i).toHaveTextContent(`ListItem clicks: 0, Button clicks: 0`),await C.click(r),await S(i).toHaveTextContent(`ListItem clicks: 0, Button clicks: 1`),await C.click(i),await S(i).toHaveTextContent(`ListItem clicks: 1, Button clicks: 1`),await C.click(r),await S(i).toHaveTextContent(`ListItem clicks: 1, Button clicks: 2`),await C.click(i),await S(i).toHaveTextContent(`ListItem clicks: 2, Button clicks: 2`)};var Q=e=>{let[t,n]=(0,v.useState)([]),r=()=>{n(e=>[...e,`listitem-click`])},i=()=>{n(e=>[...e,`button-click`])},a=()=>{n(e=>[...e,`listitem-keypress`])};return(0,x.jsx)(_,{children:(0,x.jsx)(g,{children:(0,x.jsx)(p,{...e,icon:c,title:`Keyboard Navigation Test`,description:`Interactions: ${t.join(`, `)}`,onClick:r,onKeyPress:a,controls:(0,x.jsxs)(m,{size:`xs`,variant:`outline`,onClick:i,children:[(0,x.jsx)(s,{}),(0,x.jsx)(`span`,{children:`Edit`})]}),as:`button`})})})};Q.play=async({canvasElement:e})=>{let t=w(e),n=t.getByRole(`button`,{name:/Keyboard Navigation Test/i}),r=t.getByRole(`button`,{name:/Edit/i});n.focus(),await C.keyboard(`{Enter}`),await S(n).toHaveTextContent(`listitem-keypress`),await S(n).toHaveTextContent(`listitem-click`),await C.keyboard(`{Tab}`),await S(r).toHaveFocus(),await C.keyboard(`{Enter}`),await S(n).toHaveTextContent(`button-click`),await C.keyboard(`{Shift>}{Tab}{/Shift}`),await S(n).toHaveFocus(),await C.keyboard(` `),await S(n).toHaveTextContent(`listitem-click`),await S(n).toHaveTextContent(`listitem-keypress`)},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <ListItem {...args} />
    </List>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <ListItem {...args} icon={TeddyBearIcon} />
      <ListItem {...args} icon={{
      theme: 'surface',
      svgElement: TeddyBearIcon
    }} />
    </List>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} highlightWords={['huseklepp', 'brann']} title="Erik Huseklepp" description="Tidligere Brann-spiller." icon={{
      type: 'person',
      name: 'Erik Huseklepp'
    }} />
    </List>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <ListItem {...args} loading={true} />
      <ListItem {...args} loading={false} />
    </List>,
  args: {
    icon: TeddyBearIcon
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      {variants?.map(variant => <ListItem key={variant} {...args} title={variant} description={\`Variant: \${variant}\`} variant={variant} shadow="none" linkIcon />)}
    </List>,
  args: {
    icon: TeddyBearIcon
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {shadows?.map(shadow => {
      return <>
            <ListItem {...args} icon={TeddyBearIcon} title={shadow} description={'Shadow:' + shadow} shadow={shadow} linkIcon key={shadow} />
          </>;
    })}
    </List>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {borders?.map(border => {
      return <>
            <ListItem {...args} icon={TeddyBearIcon} title={border} description={'Border:' + border} border={border} linkIcon key={border} />
          </>;
    })}
    </List>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {sizes?.map(size => {
      return <ListItem {...args} icon={{
        svgElement: TeddyBearIcon,
        theme: 'surface'
      }} title={size} description={'Size: ' + size} size={size} linkIcon key={size} />;
    })}
    </List>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} description="Badge replaced by AvatarGroup" badge={<AvatarGroup {...avatarGroupsProps} size="sm" />} linkIcon />
    </List>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      <ListItem {...args} icon={TeddyBearIcon} label={<span>
            A <em>custom</em> label{' '}
          </span>} />
    </List>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...Q.parameters?.docs?.source}}};var $=[`Default`,`IconTypes`,`Avatars`,`AvatarGroups`,`HighlightWords`,`Badges`,`LoadingState`,`Selectable`,`Collapsible`,`CollapsibleExpanded`,`NonInteractive`,`Variants`,`Shadows`,`Border`,`Sizes`,`OverridingIcon`,`OverridingBadge`,`OverridingLabel`,`CustomControls`,`OverrideTitleAs`,`InteractiveWithControls`,`KeyboardNavigation`];export{P as AvatarGroups,N as Avatars,I as Badges,W as Border,z as Collapsible,B as CollapsibleExpanded,Y as CustomControls,j as Default,F as HighlightWords,M as IconTypes,Z as InteractiveWithControls,Q as KeyboardNavigation,L as LoadingState,V as NonInteractive,X as OverrideTitleAs,q as OverridingBadge,K as OverridingIcon,J as OverridingLabel,R as Selectable,U as Shadows,G as Sizes,H as Variants,$ as __namedExportsOrder,A as default,ee as t};