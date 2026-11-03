var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a5 as e}from"./iframe-C2TXN9Gt.js";import{S as I}from"./ArrowRedo-DQpIwChN.js";import{S as k}from"./EyeClosed-CVpwFb90.js";import{S as w}from"./Archive-DKeMOGZM.js";import{S as B}from"./Trash-DNndesK1.js";import{S as D}from"./ClockDashed-BxyNbPTe.js";import{C as a}from"./ContextMenu-D21gp6hT.js";import{i as u}from"./inboxSearchResults-Bk8hHXGs.js";import{S as d}from"./TeddyBear-DC6iDRjH.js";import{L as h}from"./List-BlCHXrfZ.js";import{D as g}from"./DialogListItem-B0L_XKw8.js";import{L as y}from"./ListItem-GzrLSPBi.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-DrcWKor_.js";import"./Dropdown-ClxCQ_oE.js";import"./SearchField-BhmsKdsU.js";import"./MagnifyingGlass-yE6CRZNo.js";import"./MenuListItem-BZm8a22V.js";import"./MenuListHeading-KNqUpgh4.js";import"./MenuItem-fN7KVjMo.js";import"./CheckboxUncheckedIcon-DbFdcG4a.js";import"./RadioUncheckedIcon-BGT6n-0U.js";import"./ItemMedia-DvL0nIvI.js";import"./Avatar-FtVJWfDO.js";import"./AvatarGroup-Dp8bZnxk.js";import"./ItemLabel-zq6K58HK.js";import"./Heading-DUZOSHF_.js";import"./useHighlightedText-rpsh5ryi.js";import"./ItemControls-BNQjxOXY.js";import"./Badge-BBkduo-x.js";import"./Tooltip-DGaFfrCO.js";import"./ChevronRight-B3qMZH3P.js";import"./FieldBase-RJLhkwbG.js";import"./Typography-DMeULRXh.js";import"./Field-B9ILzcp7.js";import"./Label-C63o_NPU.js";import"./Input-DCxTW5af.js";import"./useMenu-PLj8_L9k.js";import"./MenuListDivider-DUsmtn09.js";import"./InformationSquare-CbcqUQld.js";import"./MenuElipsisHorizontal-BXDtGYaS.js";import"./dialogs-cVsxZz3q.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BaKtHTWP.js";import"./AttachmentList-ZkkIYjuA.js";import"./AttachmentLink-HtBXwvSR.js";import"./File-B9o2-Inw.js";import"./Section-SNWVUlRZ.js";import"./Flex-DqWQ_o-P.js";import"./TransmissionList-DPnIo4M3.js";import"./Transmission-B8sKjSDm.js";import"./SeenByLog-B24XaogK.js";import"./SeenByLogItem-CUiuPmkf.js";import"./Byline-DK66ofGy.js";import"./SeenByLogButton-CtNC8-iM.js";import"./Divider-Bl4NdbOx.js";import"./DialogActions-tjYoR1V4.js";import"./ButtonGroup-BxGjQybR.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BD-PEDpX.js";import"./ItemLink-TS7sXC8k.js";import"./DialogByline-nyedkcqD.js";import"./DialogMetadata-CQv5KTEq.js";import"./DialogStatus-DmEg8JPx.js";import"./Paperclip-CsMFdJqH.js";import"./Files-NLGsw_hM.js";import"./Checkmark-BMKDsWEg.js";import"./MetaBase-dcXasncf.js";import"./MetaItem-CWZMm6Ll.js";import"./ProgressIcon-Bw6mQvUI.js";import"./ChevronUp-JvKfy9Td.js";import"./ChevronDown-5BC-Ndiq.js";const{expect:m,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},s={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await m(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await m(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await m(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await m(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},Nt=["Default","ListControls","DialogControls"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...p.parameters?.docs?.source}}};export{s as Default,p as DialogControls,c as ListControls,Nt as __namedExportsOrder,Jt as default};
