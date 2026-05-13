import{j as t}from"./iframe-aW2Ivac6.js";import{S as b}from"./ArrowRedo-CgKFFDDq.js";import{S as v}from"./EyeClosed-D5L_2utW.js";import{S as I}from"./Archive-aCPoIJqz.js";import{S as k}from"./Trash-C236s4up.js";import{S as w}from"./ClockDashed-BPscwdUq.js";import{S as l}from"./TeddyBear-C-hFfJ5r.js";import{i as u}from"./inboxSearchResults-BVnKsdAI.js";import{C as r}from"./ContextMenu-CG5GStLp.js";import{L as x}from"./List-CzhnQ1IJ.js";import{L as d}from"./ListItem-Jon2HuNq.js";import{D as g}from"./DialogListItem-61kht01K.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DH4aqM3h.js";import"./dialogs-CZcBgZar.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BO48fJRs.js";import"./AttachmentList-DI9i-Z9E.js";import"./AttachmentLink-DbVLDN9V.js";import"./Icon-CD7MnEv7.js";import"./index-DWa6FdCb.js";import"./Skeleton-it7stJ0Q.js";import"./Badge-WunB0MzM.js";import"./Tooltip-DYC812UO.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CB7-Iow2.js";import"./lite-DaUVFjkg.js";import"./Section-BsfLh2yG.js";import"./Flex-CJSQwJ4K.js";import"./Heading-D9dg30ti.js";import"./useHighlightedText-ZQImmj57.js";import"./TransmissionList-DmIHaL-S.js";import"./Transmission-Cf9L3ZY2.js";import"./Typography-JHHWywcS.js";import"./SeenByLog-BAVcaIqP.js";import"./SeenByLogButton-44JfVfeo.js";import"./Button-RX-ew4zS.js";import"./button-CCQIf2kf.js";import"./AvatarGroup-Btn-kZJL.js";import"./Avatar-C-j1g9mt.js";import"./SeenByLogItem-C-h6AIWO.js";import"./Byline-tX5_ZM73.js";import"./Divider-QggnE37Q.js";import"./DialogActions-BT8Bkv6d.js";import"./ButtonGroupDivider-E_lmL3bb.js";import"./ChevronUp-Cb22o5aT.js";import"./ChevronDown-B1Tnrqm5.js";import"./DropdownBase-rksPpJpA.js";import"./useClickOutside-D8J-ykIj.js";import"./ButtonGroup-BjSwpoTC.js";import"./SearchField-uUwTRA3v.js";import"./MagnifyingGlass-CZzm3B-3.js";import"./XMark-DUdkEKb2.js";import"./FieldBase-CdSvcvFX.js";import"./Label-UVt4ZlNT.js";import"./index-BzK4-cKk.js";import"./Input-S7hdVfLT.js";import"./input-DBhNK3CK.js";import"./MenuListItem-Nc9dF1O6.js";import"./MenuListHeading-CkJcv2mm.js";import"./MenuItem-COYpbW6V.js";import"./ItemMedia-D2IPLDQS.js";import"./Checkmark-BjMWNebU.js";import"./ItemControls-BfAmDR5q.js";import"./ChevronRight-Bcq_DMzy.js";import"./useMenu-ChK92nmD.js";import"./index-CSsgmh7M.js";import"./InformationSquare-BtbGMdWt.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-CJ9HEXOr.js";import"./Dropdown-BOvlApQ8.js";import"./MenuElipsisHorizontal-DY0_PRao.js";import"./ItemLink-BWqCuyi6.js";import"./DialogByline-C6tPfCDE.js";import"./DialogMetadata-B_BMw6Uj.js";import"./DialogStatus-C_DUMr5i.js";import"./MetaItem-D8zHYS0F.js";import"./ProgressIcon-1H5WGxNn.js";import"./Paperclip-1Mg-mDDL.js";import"./Files-D0_ptg8X.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
