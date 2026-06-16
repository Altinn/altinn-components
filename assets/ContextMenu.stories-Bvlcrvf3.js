import{a7 as t}from"./iframe-5uZaoZDv.js";import{S as b}from"./ArrowRedo-CNwhAcUP.js";import{S as v}from"./EyeClosed-D1hT4fNb.js";import{S as I}from"./Archive-3ezaIRLA.js";import{S as k}from"./Trash-2WKaOU1P.js";import{S as w}from"./ClockDashed-D9mjhE8V.js";import{C as i}from"./ContextMenu-B6BhHYA_.js";import{i as l}from"./inboxSearchResults-C8k7LPn1.js";import{S as u}from"./TeddyBear-K0a-flnn.js";import{L as x}from"./List-CGkmFa0n.js";import{D as d}from"./DialogListItem-MUiAJGvE.js";import{L as g}from"./ListItem-BXdKg3lG.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CpFfsyiJ.js";import"./Dropdown-CDWM3_3M.js";import"./SearchField-BHTg7ejP.js";import"./MagnifyingGlass-BhHVps8f.js";import"./FieldBase-D-wimfjV.js";import"./Typography-DIry-l26.js";import"./useHighlightedText-SumDRzv0.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./Input-C9_VoQpt.js";import"./useMenu-ihj2gTIo.js";import"./MenuListItem-BbZ2xvN5.js";import"./MenuListDivider-BVxqYtLY.js";import"./MenuListHeading-gwVAdWe6.js";import"./MenuItem-CHpnlanL.js";import"./ItemMedia-CTN7-8P7.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./Checkmark-j8exHh37.js";import"./ItemLabel-DdCL01OT.js";import"./Heading-B0bYr3fv.js";import"./ItemControls-DqscoWhH.js";import"./Badge-CJMAUuOr.js";import"./Tooltip-BCm3h_Ql.js";import"./ChevronRight-Bm7ufgRx.js";import"./InformationSquare-DVWbDPiI.js";import"./MenuElipsisHorizontal-BtmouW_1.js";import"./dialogs-Cxb3CC2i.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-9ajrKCd8.js";import"./AttachmentList-5lECdNDF.js";import"./AttachmentLink-DJO5yWKC.js";import"./File-CWkt59PU.js";import"./Section-BAWmKTu0.js";import"./Flex-n4FQi775.js";import"./TransmissionList-I6GP_hib.js";import"./Transmission-D2FJ0Qjd.js";import"./SeenByLog-B_LBq94q.js";import"./SeenByLogButton-Db8yX2RR.js";import"./SeenByLogItem-ipgv85pW.js";import"./Byline-BzS4ED4j.js";import"./Divider-B5gmu18y.js";import"./DialogActions-Baw5AiF3.js";import"./ButtonGroupDivider-yV4mnRPl.js";import"./ChevronUp-DyiUf01B.js";import"./ChevronDown-WcynsFDk.js";import"./DropdownBase-XJitsL4R.js";import"./useClickOutside-Ckv48GIS.js";import"./ButtonGroup-BERBX_Ni.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CNx3m5cy.js";import"./ItemLink-1JWfbyN9.js";import"./DialogByline-DquPK1tC.js";import"./DialogMetadata-ClQg8iMg.js";import"./DialogStatus-lIKXsK25.js";import"./MetaItem-CeJUQOSy.js";import"./ProgressIcon-BUQgVeTa.js";import"./Paperclip-Be3E3zxm.js";import"./Files-D0ujnwZc.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
