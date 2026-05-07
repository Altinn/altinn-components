import{j as t}from"./iframe-Nkxls2w0.js";import{S as b}from"./ArrowRedo-CcVAEct4.js";import{S as v}from"./EyeClosed-CFikRG0u.js";import{S as I}from"./Archive-BdfF2mlS.js";import{S as k}from"./Trash-3ZsUZg5A.js";import{S as w}from"./ClockDashed-BquqWz1S.js";import{S as l}from"./TeddyBear-QgZ1p7zz.js";import{i as u}from"./inboxSearchResults-yAhzXEi2.js";import{C as r}from"./ContextMenu-BNXGj103.js";import{L as x}from"./List-DohYrZsw.js";import{L as d}from"./ListItem-DrUvpHxd.js";import{D as g}from"./DialogListItem-D_Rbf6ZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C8J5yFeN.js";import"./dialogs-YVl5lzzs.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-l90RwlRj.js";import"./AttachmentList-CUadELVJ.js";import"./AttachmentLink-B0gqGsyZ.js";import"./Icon-qDX4JAC4.js";import"./index-M4TkGQLb.js";import"./Skeleton-DNS4c1Rp.js";import"./Badge-Ipym1qsE.js";import"./Tooltip-sxtJg_qK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";import"./Section-DtOfuDKh.js";import"./Flex-BbiGghB8.js";import"./Heading-AZ4WQ_-Y.js";import"./useHighlightedText-BtUjP4Uj.js";import"./TransmissionList-Bmq5PsK5.js";import"./Transmission-BTYSltHS.js";import"./Typography-CZZfCvh6.js";import"./SeenByLog-C1SKwTuK.js";import"./SeenByLogButton-BVU-0N3L.js";import"./Button-Ds9vuGVD.js";import"./button-CK59nDyy.js";import"./AvatarGroup-BM9A-Bel.js";import"./Avatar-BDGJojEv.js";import"./SeenByLogItem-DUxf1Mc_.js";import"./Byline-CpP3L2XY.js";import"./Divider-ymGzUq0F.js";import"./DialogActions--_eqqnS7.js";import"./ButtonGroupDivider-BRcd2kIA.js";import"./ChevronUp-UjgZK29V.js";import"./ChevronDown-DGUtPuYx.js";import"./DropdownBase-C65ANZdL.js";import"./useClickOutside-DrSZ_vYW.js";import"./ButtonGroup-HCy2ouFP.js";import"./SearchField-Bb3Ffka2.js";import"./MagnifyingGlass-k_g2FxNc.js";import"./XMark-D-ALqV0n.js";import"./FieldBase-Drb41XPf.js";import"./Label-DRBFvXSF.js";import"./index-Bvwkp7W_.js";import"./Input-BDHdvqI3.js";import"./input-MPZybUVd.js";import"./MenuListItem-Cfh5A6HZ.js";import"./MenuListHeading-CEofuJGo.js";import"./MenuItem-edMrv6Qw.js";import"./ItemMedia-CsEr1Zw1.js";import"./Checkmark-DHusaxnp.js";import"./ItemControls-BH6jrH_o.js";import"./ChevronRight-Bcpq3qt2.js";import"./useMenu-WCeLZ4vF.js";import"./InformationSquare-zR5D--CT.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BB48Tjgy.js";import"./Dropdown-D5aFsl9a.js";import"./MenuElipsisHorizontal-CFVZ-H4Q.js";import"./ItemLink-CJbh8GaA.js";import"./DialogByline-DqQ1X-8A.js";import"./DialogMetadata-CBL_UeI7.js";import"./DialogStatus-rLCqgvJb.js";import"./MetaItem-3FiCOdXt.js";import"./ProgressIcon-BU-kIsVB.js";import"./Paperclip-CSwfMlvx.js";import"./Files-a7MOY8QZ.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Wt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Xt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Xt as __namedExportsOrder,Wt as default};
