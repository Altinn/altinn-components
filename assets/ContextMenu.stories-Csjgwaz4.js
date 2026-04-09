import{j as t}from"./iframe-DgiLb7Jh.js";import{S as b}from"./ArrowRedo-BGohPQ-y.js";import{S as v}from"./EyeClosed-rNAv-Kjp.js";import{S as I}from"./Archive-DCJg-9Yj.js";import{S as k}from"./Trash-1SNvNmMf.js";import{S as w}from"./ClockDashed-CKcQn27N.js";import{S as l}from"./TeddyBear-CB1wEYZJ.js";import{i as u}from"./inboxSearchResults-BwQDjbMO.js";import{C as r}from"./ContextMenu-DG0-Wypj.js";import{L as x}from"./List-DTj7XRDi.js";import{L as d}from"./ListItem-DCHK_eIp.js";import{D as g}from"./DialogListItem-Drm_vAtk.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-6J1VG5PF.js";import"./dialogs-CZXADzpR.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C-7ESRcu.js";import"./AttachmentList-DIIMKUvc.js";import"./AttachmentLink-8CpMApB2.js";import"./Icon-uoDJWBW9.js";import"./index-CzzvqmNv.js";import"./Skeleton-CjXkBVSw.js";import"./Badge-DFo-bNGw.js";import"./Section-BoeinIOl.js";import"./Flex-BfnRV8tR.js";import"./Heading-CAIwUoS2.js";import"./useHighlightedText-C3KXFHAg.js";import"./TransmissionList-Cmb4q_SS.js";import"./Transmission-BnWSTIJL.js";import"./Typography-Bp8CNLT3.js";import"./SeenByLog-CwkelWbo.js";import"./SeenByLogButton-RvkZHYAE.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-BGNg7yRW.js";import"./Avatar-D2ea3_hU.js";import"./SeenByLogItem-DoZ5FcTt.js";import"./Byline-58BLL4Ck.js";import"./Divider-D-bz7DwV.js";import"./DialogActions-CJ8LZBxC.js";import"./ButtonGroupDivider-eHUmueO9.js";import"./ChevronUp-X_MpgVb_.js";import"./ChevronDown-1x60-vzB.js";import"./DropdownBase-DIlZu5cZ.js";import"./useClickOutside-DXlVgUmO.js";import"./ButtonGroup-Ds9mrFFQ.js";import"./SearchField-CTb1s1hd.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./XMark-DE16CL-6.js";import"./FieldBase-B0t89PB6.js";import"./Label-6LQ7LXNA.js";import"./index-Cu0iGtDM.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./MenuListItem-BzaUHJzz.js";import"./MenuListHeading-BHx30WUA.js";import"./MenuItem-CM4esdkj.js";import"./ItemMedia-BvSNOAVc.js";import"./Checkmark-49Lv_3MM.js";import"./ChevronRight-B8GqJ6hU.js";import"./useMenu-7q5OpfBf.js";import"./InformationSquare-CZhEVvng.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-fXPHld1D.js";import"./Dropdown-Bk4mNQmY.js";import"./Tooltip-00zSbMAL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-BoLrkDy9.js";import"./DialogByline-C6BfbdN3.js";import"./DialogMetadata-D_8Yb5kh.js";import"./DialogStatus-BBrMZJJi.js";import"./Hourglass-BarokLCs.js";import"./MetaProgress-C_Fu46Qr.js";import"./MetaItemLabel-CF-OIWi2.js";import"./ProgressIcon-DfY4zpvD.js";import"./MetaItem-DshZNRUB.js";import"./MetaTimestamp-DzRC_88g.js";import"./Paperclip-DhNvEpcT.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
