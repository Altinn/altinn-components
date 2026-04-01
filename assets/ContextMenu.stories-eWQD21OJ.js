import{j as t}from"./iframe-DxxW_Hah.js";import{S as b}from"./ArrowRedo-BsR8jUw0.js";import{S as v}from"./EyeClosed-m5w00Iwz.js";import{S as I}from"./Archive-DnNxZuyO.js";import{S as k}from"./Trash-CiL8T8GI.js";import{S as w}from"./ClockDashed-CrJirZ2g.js";import{S as l}from"./TeddyBear-24j_eE7-.js";import{i as u}from"./inboxSearchResults-B-iey6wF.js";import{C as r}from"./ContextMenu-DcBOXvkt.js";import{L as x}from"./List-C_geiOhU.js";import{L as d}from"./ListItem-dSza7nWX.js";import{D as g}from"./DialogListItem-CoRkRQLy.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CckRU7I8.js";import"./dialogs-C2ntz6qE.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-JQgLoKfA.js";import"./AttachmentList-D1cfOg6d.js";import"./AttachmentLink-BscBn763.js";import"./Icon-Cf03fdWw.js";import"./index-pOAXHZ6n.js";import"./Skeleton-DiRARuJ9.js";import"./Badge-CQ9EBUDZ.js";import"./Section-DDQuxuHV.js";import"./Flex-CRmH3H-L.js";import"./Heading-Bejow2zA.js";import"./useHighlightedText-C9OLcmcP.js";import"./TransmissionList-BLN3g2hs.js";import"./Transmission-DtMu8EYO.js";import"./Typography-CfTPPq_a.js";import"./SeenByLog-CX-cREhq.js";import"./SeenByLogButton-BInkLAq6.js";import"./Button-CcwbSiKg.js";import"./button-BBYE_PPH.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Avatar--rA6gsID.js";import"./SeenByLogItem-DjvFflZB.js";import"./Byline-DMQrC7vU.js";import"./Divider-DBrd6wZZ.js";import"./DialogActions-Dx65pL0y.js";import"./ButtonGroupDivider-i0Wffh1Y.js";import"./ChevronUp-rIZe7Kl4.js";import"./ChevronDown-qSt-istD.js";import"./DropdownBase-BSISdOOS.js";import"./useClickOutside-RChdGwyC.js";import"./ButtonGroup-wgVYayc9.js";import"./SearchField-ptc2QeHn.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./XMark-ChXBbXGN.js";import"./FieldBase-ttSv04zw.js";import"./Label-YFmv6AXl.js";import"./index-D2WP85Bl.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./MenuListItem-BWh93a_i.js";import"./MenuListHeading-CIz6aOLR.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./Checkmark-pZi8btQa.js";import"./ChevronRight-CqOTbusb.js";import"./useMenu-DMxEdeKU.js";import"./InformationSquare-CuO8i3VE.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BAV-gCcK.js";import"./Dropdown-_zFGDkyY.js";import"./Tooltip-DIHoftUf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-pJbAwWYV.js";import"./DialogByline-Du1hGINf.js";import"./DialogMetadata-CapFCZ5_.js";import"./DialogStatus-BcCvAVCH.js";import"./Hourglass-CGgP1wKK.js";import"./MetaProgress-CifHpJXP.js";import"./MetaItemLabel-DqN1VyNe.js";import"./ProgressIcon-XdDlWE6d.js";import"./MetaItem-xtWV0LxD.js";import"./MetaTimestamp-zyX_PIDg.js";import"./Paperclip-BvNde2e8.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
