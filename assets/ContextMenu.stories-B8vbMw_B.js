import{j as t}from"./iframe-qDHSBZ_X.js";import{S as b}from"./ArrowRedo-B3bbel1y.js";import{S as v}from"./EyeClosed-thqkC0sc.js";import{S as I}from"./Archive-C71dF3LI.js";import{S as k}from"./Trash-CJ5RcE6N.js";import{S as w}from"./ClockDashed-CCGqbt4n.js";import{S as l}from"./TeddyBear-Dst3-pk-.js";import{i as u}from"./inboxSearchResults-CVFQpwj3.js";import{C as r}from"./ContextMenu-DOLPZcNs.js";import{L as x}from"./List-CWWxrTyE.js";import{L as d}from"./ListItem-CtT8THVd.js";import{D as g}from"./DialogListItem-BmEVHynY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DLE_nI5l.js";import"./dialogs-DW7CGd5D.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DQPgjM7s.js";import"./AttachmentList-BaNKUAIl.js";import"./AttachmentLink-DgiqGYzk.js";import"./Icon-BDVkMuHy.js";import"./index-DTh2bawh.js";import"./Skeleton-CJ3n2_6V.js";import"./Badge-CmtcZ1do.js";import"./Section-BGNwMxU-.js";import"./Flex-BTOiCOb2.js";import"./Heading-D2BacHeJ.js";import"./useHighlightedText-D75SWcvd.js";import"./TransmissionList-BrFwMtuL.js";import"./Transmission-BJDlos-Q.js";import"./Typography-DhQz7tKb.js";import"./SeenByLog-B0L-OaGP.js";import"./SeenByLogButton-BHN3k_s8.js";import"./Button-DJMfIG2l.js";import"./button-CfQ7EAt1.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Avatar-BNcU10On.js";import"./SeenByLogItem-BBDtAwmP.js";import"./Byline-Wskmiy6G.js";import"./Divider-Bq2ZhUaf.js";import"./DialogActions-BQ2zQoUY.js";import"./ButtonGroupDivider-DDSk5KKM.js";import"./ChevronUp-BCgkquKN.js";import"./ChevronDown-By4Pb8IL.js";import"./DropdownBase-BqSE5S-1.js";import"./useClickOutside-CAQh4xNR.js";import"./ButtonGroup-D3OFsAa4.js";import"./SearchField-owOVnt34.js";import"./MagnifyingGlass-52kli1F6.js";import"./XMark-D8iHP3Cp.js";import"./FieldBase-36tTBvzs.js";import"./Label-UpgatIiv.js";import"./index-C32uHHVZ.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./MenuListItem-BPMBfOBa.js";import"./MenuListHeading-CFSESgmr.js";import"./MenuItem-CYIZHSHo.js";import"./ItemMedia-p3tZByS2.js";import"./Checkmark-BOxDKZpX.js";import"./ItemControls-Bd_Ry2Op.js";import"./ChevronRight-Dusr5JiS.js";import"./useMenu-5iviLK-9.js";import"./InformationSquare-ClYcp41K.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-CkPbLtTM.js";import"./Dropdown-zJkG990V.js";import"./Tooltip-gFU6qfTf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DaGYavuu.js";import"./ItemLink-BI9Xo5Q5.js";import"./DialogByline-Ct1rjRtA.js";import"./DialogMetadata-OPer9jqT.js";import"./DialogStatus-_56oYMmJ.js";import"./Hourglass-yc8G_V1b.js";import"./MetaProgress-BcLnhWrd.js";import"./MetaItemLabel-Ca-HjerV.js";import"./ProgressIcon-D1ufgSVK.js";import"./MetaItem-Qyxklrcy.js";import"./MetaTimestamp-DTBTXSRm.js";import"./Paperclip-C3GpGrWg.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const to=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,to as __namedExportsOrder,$t as default};
