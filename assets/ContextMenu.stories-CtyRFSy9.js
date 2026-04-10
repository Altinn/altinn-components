import{j as t}from"./iframe-DpqvNfuX.js";import{S as b}from"./ArrowRedo-BDWQ7uyU.js";import{S as v}from"./EyeClosed-Dtoxl22j.js";import{S as I}from"./Archive-DCRHCjAj.js";import{S as k}from"./Trash-BiqPoHTU.js";import{S as w}from"./ClockDashed-CuVHX12c.js";import{S as l}from"./TeddyBear-Cgcmqtuv.js";import{i as u}from"./inboxSearchResults-BbEKhgAo.js";import{C as r}from"./ContextMenu-BR8rSsRr.js";import{L as x}from"./List-CLF93S-1.js";import{L as d}from"./ListItem-CCCiwYYh.js";import{D as g}from"./DialogListItem-D6MixUQW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BXmkKvJa.js";import"./dialogs-v-5MLNXx.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DmAqjpZE.js";import"./AttachmentList-BhR7k61v.js";import"./AttachmentLink-DKIfWyjR.js";import"./Icon-DaddCVMS.js";import"./index-Ct2h27FF.js";import"./Skeleton-CUXlhXSK.js";import"./Badge-DH_aKElc.js";import"./Section-CtbhQhiL.js";import"./Flex-BVIzbH2w.js";import"./Heading-CsYSWfhV.js";import"./useHighlightedText-CsoqNVCh.js";import"./TransmissionList-tPslq_pZ.js";import"./Transmission-DYgFJgAr.js";import"./Typography-7MtHaiXa.js";import"./SeenByLog-wbu9LbiB.js";import"./SeenByLogButton-DqQBpjGn.js";import"./Button-2gJDIHFD.js";import"./button-B0qBlS1p.js";import"./use-merge-refs-C3UJEavz.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-fDT9dP8b.js";import"./Avatar-BnDDwZQL.js";import"./SeenByLogItem-BjACC0jx.js";import"./Byline-D3lAONhk.js";import"./Divider-Cx6flCJn.js";import"./DialogActions-NNNrThgG.js";import"./ButtonGroupDivider-DJwUN8yr.js";import"./ChevronUp-Dxkuhvvs.js";import"./ChevronDown-wC2GJNFy.js";import"./DropdownBase-DYlaIXdq.js";import"./useClickOutside-BtQarK1K.js";import"./ButtonGroup-DLg5nJZL.js";import"./SearchField-B4PsSxTf.js";import"./MagnifyingGlass-oMKY7BYp.js";import"./XMark-D5GqdRxj.js";import"./FieldBase-CwbZRzDX.js";import"./Label-DGyVWTo1.js";import"./index-C4Ss_iIN.js";import"./Input-CtghcgQm.js";import"./input-AC6H3fN5.js";import"./MenuListItem-ydSncMmo.js";import"./MenuListHeading-C8YiegkQ.js";import"./MenuItem-DsVjpCyh.js";import"./ItemMedia-UuJJBLbY.js";import"./Checkmark-B0EPfKD4.js";import"./ChevronRight-l4sUB0S3.js";import"./useMenu-CL8JxMzd.js";import"./InformationSquare-x_nyg8Lo.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BsIinftt.js";import"./Dropdown-g5xLWPPm.js";import"./Tooltip-BWGqnLO5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DhZAoCcg.js";import"./DialogByline-DwEfnTOH.js";import"./DialogMetadata-CQdRU_Mz.js";import"./DialogStatus-qsSAj2Fr.js";import"./Hourglass-9BKnxTfM.js";import"./MetaProgress-CrbSNGpR.js";import"./MetaItemLabel-7ghe1Zpj.js";import"./ProgressIcon-8fSPtnzS.js";import"./MetaItem-C3_qwGoH.js";import"./MetaTimestamp-PNIHCtUT.js";import"./Paperclip-C-wMqTaU.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  return <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
  const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
  return <List>
      <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
