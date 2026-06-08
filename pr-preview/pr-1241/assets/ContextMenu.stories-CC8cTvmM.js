import{a7 as t}from"./iframe-KbHODQgb.js";import{S as b}from"./ArrowRedo-oOVmSMhH.js";import{S as v}from"./EyeClosed-CRyerha4.js";import{S as I}from"./Archive-D0FcTHIV.js";import{S as k}from"./Trash-Af7bx1Lq.js";import{S as w}from"./ClockDashed-BViIBFFY.js";import{C as i}from"./ContextMenu-DeNRHsXv.js";import{i as l}from"./inboxSearchResults-DM7-EYFg.js";import{S as u}from"./TeddyBear-BgRWqJ_K.js";import{L as x}from"./List-DEwsIv64.js";import{D as d}from"./DialogListItem-DSZMh3_b.js";import{L as g}from"./ListItem-B8fUE1Gh.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-C2TGyR2O.js";import"./Dropdown-2MkuZ1sA.js";import"./SearchField-BOprvfZ0.js";import"./MagnifyingGlass-Db52e0Xc.js";import"./FieldBase-Vfg8qV6A.js";import"./Typography-C9K693Jo.js";import"./useHighlightedText-uGguOCwY.js";import"./Field-B8zKs9Bz.js";import"./Label-C3jcdxRS.js";import"./Input-DwLHHyGz.js";import"./useMenu-veT1adJt.js";import"./MenuListItem-D3mLd2IU.js";import"./MenuListHeading-BPNZa_yh.js";import"./MenuItem-BP2R6FfU.js";import"./ItemMedia-vwuqAhM8.js";import"./Avatar-DL544SyI.js";import"./AvatarGroup-CCjx5RK0.js";import"./Checkmark-CO83o23q.js";import"./ItemLabel-BW6ywGNt.js";import"./Heading-jxV4Y0yK.js";import"./ItemControls-BYcmr1lT.js";import"./Badge-MoiWNolG.js";import"./Tooltip-BDxQfQSw.js";import"./ChevronRight-wplb_UH2.js";import"./index-DNTFCYRR.js";import"./InformationSquare-DCyKofJQ.js";import"./MenuElipsisHorizontal-CV5BoB6D.js";import"./dialogs-Bc1HocpT.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BwVJCw6l.js";import"./AttachmentList-5CLT2scB.js";import"./AttachmentLink-Cr17w__T.js";import"./File-Cl-9gMMr.js";import"./Section-BQYKGPm8.js";import"./Flex-DJYB_We1.js";import"./TransmissionList-C6yrGIuv.js";import"./Transmission-CMGND5HP.js";import"./SeenByLog-D5lga72_.js";import"./SeenByLogButton-CxuQ8wNs.js";import"./SeenByLogItem-XM8q8lie.js";import"./Byline-CQxYRlRU.js";import"./Divider-CbNMIzqf.js";import"./DialogActions-ohX66S-F.js";import"./ButtonGroupDivider-Bgv434RO.js";import"./ChevronUp-DjGQTIt5.js";import"./ChevronDown-DDGA5gfO.js";import"./DropdownBase-c1DwtjVn.js";import"./useClickOutside-DyFrN0HZ.js";import"./ButtonGroup-D1R72gzy.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CTCHDdfF.js";import"./ItemLink-NIMU7q5y.js";import"./DialogByline-Bqc_aLHY.js";import"./DialogMetadata-DTss6qO_.js";import"./DialogStatus-BAXo1esF.js";import"./MetaItem-ByNFtnxP.js";import"./ProgressIcon-CxCSa3OZ.js";import"./Paperclip-B3Sy7vLj.js";import"./Files-BhclPoqH.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
