import{j as t}from"./iframe-BJEbXdzo.js";import{S as b}from"./ArrowRedo-BEbKJysc.js";import{S as v}from"./EyeClosed-DpAbto1G.js";import{S as I}from"./Archive-dgyTBxhE.js";import{S as k}from"./Trash-C9Nxl2VC.js";import{S as w}from"./ClockDashed-DOP-lu-g.js";import{S as l}from"./TeddyBear-aaLcFD_D.js";import{i as u}from"./inboxSearchResults-CPcNmmS5.js";import{C as r}from"./ContextMenu-BZKtsYlZ.js";import{L as x}from"./List-DutQ8fVG.js";import{L as d}from"./ListItem-lGtwNmac.js";import{D as g}from"./DialogListItem-U-YaHAQx.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DgrNWXh_.js";import"./dialogs-Bipx0y0H.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BpZPO-9w.js";import"./AttachmentList-DdyLTWST.js";import"./AttachmentLink-C3u84y2k.js";import"./Icon-msEkDcFf.js";import"./index-ChGHkNNv.js";import"./Skeleton-DWcIZ1wH.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./Section-BfJWddEs.js";import"./Flex-DRE_amb0.js";import"./Heading-1LBL0JVO.js";import"./useHighlightedText-Chj_Mw3b.js";import"./TransmissionList-D7i4njsw.js";import"./Transmission-BVrLY4rr.js";import"./Typography-D85R78i7.js";import"./SeenByLog-g6H_NDy9.js";import"./SeenByLogButton-BUp_AS3i.js";import"./Button-DNsjk1zC.js";import"./button-3a31VMtF.js";import"./AvatarGroup-Cpo75nCB.js";import"./Avatar-CcIuhVy2.js";import"./SeenByLogItem-D0NqW5Dh.js";import"./Byline-DmkRO0cx.js";import"./Divider-D2x5dGTA.js";import"./DialogActions-3klqp9GH.js";import"./ButtonGroupDivider-CFce6icy.js";import"./ChevronUp-D3W-us6_.js";import"./ChevronDown-BptX0rEl.js";import"./DropdownBase-BYq0xkEJ.js";import"./useClickOutside-B6rTSfnw.js";import"./ButtonGroup-CbGBNNFa.js";import"./SearchField-C43D0Bvg.js";import"./MagnifyingGlass-Dp61EhHj.js";import"./XMark-sTHnj54s.js";import"./FieldBase-s2kWEUm7.js";import"./Label-DQQXrne0.js";import"./index-THETCITG.js";import"./Input-BI0TJMod.js";import"./input-CnbiDkgl.js";import"./MenuListItem-U3U1VVBg.js";import"./MenuListHeading-BxpAf7GB.js";import"./MenuItem-CIe0tXLI.js";import"./ItemMedia-CiNZWpX-.js";import"./Checkmark-DLPFtMmB.js";import"./ItemControls-CAq51EMf.js";import"./ChevronRight-CoSPx3Kv.js";import"./useMenu-9_PPaP-8.js";import"./InformationSquare-e9K9-Rpn.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DuWgBdSv.js";import"./Dropdown-BWrGCxZb.js";import"./MenuElipsisHorizontal-_50h2TOj.js";import"./ItemLink-DuiVdY3z.js";import"./DialogByline-C2Lo8tkP.js";import"./DialogMetadata-DPKbj-FW.js";import"./DialogStatus-EiGcRmpc.js";import"./MetaItem-Cn1M6iDE.js";import"./ProgressIcon-CQzduuJP.js";import"./Paperclip-Do9FRucA.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Wt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Wt as __namedExportsOrder,Vt as default};
