import{j as t}from"./iframe-DkQPO9ro.js";import{S as b}from"./ArrowRedo-BKSDD2mY.js";import{S as v}from"./EyeClosed-C-z0R-HC.js";import{S as I}from"./Archive-cVVZTQ-I.js";import{S as k}from"./Trash-C8jSETfh.js";import{S as w}from"./ClockDashed-0qd6mo8-.js";import{S as l}from"./TeddyBear-R0sOz7tP.js";import{i as u}from"./inboxSearchResults-DWT0_zCk.js";import{C as r}from"./ContextMenu-Dd8TL9fD.js";import{L as x}from"./List-DQSHYer2.js";import{L as d}from"./ListItem-BiMhvfk_.js";import{D as g}from"./DialogListItem-DJ0f1bAY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CwF4wxTL.js";import"./dialogs-DxsMi_ZO.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-14VWTuU4.js";import"./AttachmentList-DJBTZtc6.js";import"./AttachmentLink-D_b2UV4A.js";import"./Icon-Dao4TSf9.js";import"./index-BrTdOUlk.js";import"./Skeleton-8DklmnzK.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./Section-DUH4Cyq_.js";import"./Flex-Cy28VffD.js";import"./Heading-Otl-Ib-S.js";import"./useHighlightedText-BlkM7iRt.js";import"./TransmissionList-D4NfHLNe.js";import"./Transmission-BI-36KLT.js";import"./Typography-cgJeIGtL.js";import"./SeenByLog-DqaVhv0L.js";import"./SeenByLogButton-DVUJ0qqd.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./AvatarGroup-DkXzBnSr.js";import"./Avatar-DlrsSRUv.js";import"./SeenByLogItem-Bhg4ISrM.js";import"./Byline-DEuCU6Hn.js";import"./Divider-vTnAPnFd.js";import"./DialogActions-FAarh6qS.js";import"./ButtonGroupDivider-ff9B_AjZ.js";import"./ChevronUp-1RXiKLsv.js";import"./ChevronDown-CbPk4DLa.js";import"./DropdownBase-D3V3Npru.js";import"./useClickOutside-DuX29rCd.js";import"./ButtonGroup-3KQzrPQQ.js";import"./SearchField-BFSdJUV0.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./XMark-5G2rqhrX.js";import"./FieldBase-BPqKon2e.js";import"./Label-DNmTNqvr.js";import"./index-BCCMT4X2.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./MenuListItem-BEjobN4X.js";import"./MenuListHeading-DNdWEvDL.js";import"./MenuItem-BCrg9AvC.js";import"./ItemMedia-CHWY5IG3.js";import"./Checkmark-JWLDNW8H.js";import"./ItemControls-Czqw_jtP.js";import"./ChevronRight-Ddmldm4v.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";import"./InformationSquare-DS3QJ89x.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-tv24Gc_I.js";import"./Dropdown-DDoGMqNi.js";import"./MenuElipsisHorizontal-BJkqF5yI.js";import"./ItemLink-z5fThoi9.js";import"./DialogByline-CUnmclZ3.js";import"./DialogMetadata-Ckw1J82v.js";import"./DialogStatus-bnbdrjxq.js";import"./MetaItem-CDB2VhNt.js";import"./ProgressIcon-BKWR6pkk.js";import"./Paperclip-C9Fsh0Rf.js";import"./Files-C7jYqi9F.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
