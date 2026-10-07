import{a7 as t}from"./iframe-CSiNS2_t.js";import{S as b}from"./ArrowRedo-mCVhBdC4.js";import{S as v}from"./EyeClosed-CG9RcIYj.js";import{S as I}from"./Archive-Mf-Uju2B.js";import{S as k}from"./Trash-BcSvu00l.js";import{S as w}from"./ClockDashed-oEpq6VsW.js";import{C as n}from"./ContextMenu-DaihOZ4w.js";import{i as l}from"./inboxSearchResults-6EMFOspk.js";import{S as u}from"./TeddyBear-Ckw3GDRn.js";import{L as x}from"./List-DUVcdDRk.js";import{D as d}from"./DialogListItem-HGK-Zsqr.js";import{L as g}from"./ListItem-B3moosZM.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BLzkNBR-.js";import"./Dropdown-DvIMOq-U.js";import"./SearchField-404uhg7e.js";import"./MagnifyingGlass-L16wMwR7.js";import"./FieldBase-rPqTSW37.js";import"./Typography-tfUHPeKu.js";import"./useHighlightedText-Cb4_TuQn.js";import"./Field-dYgOH5Kq.js";import"./Label-p2f33G11.js";import"./Input-BUqwhKEV.js";import"./useMenu-DQhM8YBj.js";import"./MenuListItem-BphPPZ1-.js";import"./MenuListDivider-DaQR_cA_.js";import"./MenuListHeading-oP2DliYX.js";import"./MenuItem-EWHoKTTM.js";import"./ItemMedia-DGv-wSpo.js";import"./Avatar-BZjVPcts.js";import"./AvatarGroup-By7Dr3dC.js";import"./Checkmark-BXugcN3r.js";import"./ItemLabel-C0x86jDQ.js";import"./Heading-BPvQUGVy.js";import"./ItemControls-Cqj4-f4C.js";import"./Badge-CCAu-QUf.js";import"./Tooltip-CTn3iU7H.js";import"./ChevronRight-dChxZgZA.js";import"./InformationSquare-BVqQ7zdO.js";import"./MenuElipsisHorizontal-BPxxMSx9.js";import"./dialogs-tgCUZMoG.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-RC3Yz3VY.js";import"./AttachmentList-lF1lcWPt.js";import"./AttachmentLink-DAVIbwh_.js";import"./File-DmG3ZrjZ.js";import"./Section-iGjVnzYd.js";import"./Flex-DavaSday.js";import"./TransmissionList-8dKPl3VC.js";import"./Transmission-hY9HQQwK.js";import"./SeenByLog-IAWNEpLw.js";import"./SeenByLogItem-Ch1h3JaY.js";import"./Byline-Ofgpqf54.js";import"./SeenByLogButton-CYzWkEwH.js";import"./Divider-y9qHaSmE.js";import"./DialogActions-BwVACgPK.js";import"./ButtonGroupDivider-DfTuAjlw.js";import"./ChevronUp-DkTPAx2G.js";import"./ChevronDown-Cyaskzrl.js";import"./DropdownBase-Bz48BFo_.js";import"./useClickOutside-qCyMU8aA.js";import"./ButtonGroup-D1fEqQ1N.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DDHhwE3C.js";import"./ItemLink-A7alqNSc.js";import"./DialogByline-C3Gb7JfG.js";import"./DialogMetadata-Bo4iG6V7.js";import"./DialogStatus-CiRXnPXz.js";import"./Paperclip-D01utT8q.js";import"./Files-Big6TD-B.js";import"./MetaBase-DDVAOtaK.js";import"./MetaItem-0kwApIqB.js";import"./ProgressIcon-BiTMP1ly.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
