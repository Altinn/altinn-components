import{j as t}from"./iframe-bdb8MxAl.js";import{S as b}from"./ArrowRedo-DMXwd77A.js";import{S as v}from"./EyeClosed-DSG4dhaU.js";import{S as I}from"./Archive-DDiFiqWF.js";import{S as k}from"./Trash-D-U6L-Nc.js";import{S as w}from"./ClockDashed-xI7DiCFJ.js";import{S as l}from"./TeddyBear-Bmnu5x9A.js";import{i as u}from"./inboxSearchResults-ie_BsyQa.js";import{C as r}from"./ContextMenu-CzMuKD40.js";import{L as x}from"./List-Dq0MjOQZ.js";import{L as d}from"./ListItem-Hms5tlXl.js";import{D as g}from"./DialogListItem-MUsR7Aoi.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-m2lwd_Ct.js";import"./dialogs-CTyW4RYS.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments--aN3hpTF.js";import"./AttachmentList-B-NOUylq.js";import"./AttachmentLink-BjFTHr2F.js";import"./Icon-DDIx0qrc.js";import"./index-p3wA3m8m.js";import"./Skeleton-BMmeChMq.js";import"./Badge-CZZ-T3gy.js";import"./Section-CT0nm1G-.js";import"./Flex-7ZoZ5Zdr.js";import"./Heading-BV-bgYII.js";import"./useHighlightedText-BZip2xbp.js";import"./TransmissionList-CIfojoeF.js";import"./Transmission-B2SpkyJq.js";import"./Typography-BHyeW1q-.js";import"./SeenByLog-DrzBrryg.js";import"./SeenByLogButton-B5xFzFoI.js";import"./Button-CmmCg_X2.js";import"./button-riuqcLff.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-DeyVKu-1.js";import"./Avatar-Di5f2hN1.js";import"./SeenByLogItem-CuWNZcVP.js";import"./Byline-BRx9wIzR.js";import"./Divider-BxkAC3mV.js";import"./DialogActions-BRAlpGdK.js";import"./ButtonGroupDivider-CZhGnBHU.js";import"./ChevronUp-CsyoBPJv.js";import"./ChevronDown-De8akAeb.js";import"./DropdownBase-CBSDfrb-.js";import"./useClickOutside-DjQk6OJX.js";import"./ButtonGroup-BdDqNtW_.js";import"./SearchField-Q9bTEqZH.js";import"./MagnifyingGlass-CUUYZIQ1.js";import"./XMark-ml8n1JcF.js";import"./FieldBase-DvRhg6xr.js";import"./Label-DBSC-MMD.js";import"./index-Bm_5QTlm.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./MenuListItem-CqjGn-MF.js";import"./MenuListHeading-DgV7uPAe.js";import"./MenuItem-CkSmk6Ko.js";import"./ItemMedia-Bzsndyr0.js";import"./Checkmark-YAJv3o3m.js";import"./ItemControls-CoqYqtfq.js";import"./ChevronRight-Cnln8IKV.js";import"./useMenu-Dc6Nz6rI.js";import"./InformationSquare-nixk64HR.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-CBF1KoVv.js";import"./Dropdown-B41Ltmad.js";import"./Tooltip-C9AV6ve2.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-yLxiENdI.js";import"./ItemLink-CZYTlEil.js";import"./DialogByline-sTdI63O9.js";import"./DialogMetadata-ChdrT7yw.js";import"./DialogStatus-BYVpR1mO.js";import"./Hourglass-D1Zg_AOP.js";import"./MetaProgress-DzfAxak8.js";import"./MetaItemLabel-DUeXcMIj.js";import"./ProgressIcon-B1ibr2L8.js";import"./MetaItem-DeSOrBHL.js";import"./MetaTimestamp-CKZqQbT9.js";import"./Paperclip-CKCmzp7v.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const to=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,to as __namedExportsOrder,$t as default};
