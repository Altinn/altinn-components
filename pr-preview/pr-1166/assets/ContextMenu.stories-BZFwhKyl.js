import{j as t}from"./iframe-Cppd0qv6.js";import{S as b}from"./ArrowRedo-Dh5qlMHn.js";import{S as v}from"./EyeClosed-DVcH-zhr.js";import{S as I}from"./Archive-DaKE8wNx.js";import{S as k}from"./Trash-ahBs7pt8.js";import{S as w}from"./ClockDashed-DUQb8KiC.js";import{S as l}from"./TeddyBear-CmCzJkKe.js";import{i as u}from"./inboxSearchResults-C-20CYBt.js";import{C as r}from"./ContextMenu-C6NdKlu4.js";import{L as x}from"./List-B3lNMupF.js";import{L as d}from"./ListItem-BWQ_dxae.js";import{D as g}from"./DialogListItem-DSqGO5Qj.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BBgZM5Xr.js";import"./dialogs-B3WrOj0L.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C866YnFr.js";import"./AttachmentList-38ded-VS.js";import"./AttachmentLink-DP5X-5A3.js";import"./Icon-DYZqEJGr.js";import"./index-BRImx9w3.js";import"./Skeleton-DZL_2b5i.js";import"./Badge-DKrs0UA7.js";import"./Tooltip-B3YY3plR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BVudX8AY.js";import"./lite-DaUVFjkg.js";import"./Section-B6Kfhq0f.js";import"./Flex-BPZu7a_-.js";import"./Heading-CVWk1BMK.js";import"./useHighlightedText-CnlmbfHa.js";import"./TransmissionList-CgI2V3UI.js";import"./Transmission-C5Dt4nFH.js";import"./Typography-CFy91Abt.js";import"./SeenByLog-CzJoDYzZ.js";import"./SeenByLogButton-CrxP4Q5Z.js";import"./Button-DZtlkh8w.js";import"./button-DXqTFqXv.js";import"./AvatarGroup-CkQ-nr_4.js";import"./Avatar-C8BEFMoW.js";import"./SeenByLogItem-yJAIn64n.js";import"./Byline-joygHiwG.js";import"./Divider-DkVfc8bj.js";import"./DialogActions-DvuR862O.js";import"./ButtonGroupDivider-Cf7MVCnb.js";import"./ChevronUp-BQWLGwxf.js";import"./ChevronDown-DyFLAVGh.js";import"./DropdownBase-DPRk2IQ8.js";import"./useClickOutside-Bv-MH2_A.js";import"./ButtonGroup-DWofFi2X.js";import"./SearchField-Cfz4mYX1.js";import"./MagnifyingGlass-D5_sNBXy.js";import"./XMark-xtLLERRk.js";import"./FieldBase-AUbtsXZu.js";import"./Label-BZYzljw4.js";import"./index-DZ9ad6Vq.js";import"./Input-BKVpgPJL.js";import"./input-DhtF3MwF.js";import"./MenuListItem-BHtHmzZq.js";import"./MenuListHeading-DGbRdhBr.js";import"./MenuItem-DujpBTEw.js";import"./ItemMedia-B28DyjI4.js";import"./Checkmark-Ci2lQnJg.js";import"./ItemControls-D1uxt3OD.js";import"./ChevronRight-CWvUN_3J.js";import"./useMenu-Dh0AdFxf.js";import"./InformationSquare-C6gp2qmA.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BL3HRjvJ.js";import"./Dropdown-CazJ30ul.js";import"./MenuElipsisHorizontal-E1vulT3j.js";import"./ItemLink-C9wl5dRr.js";import"./DialogByline-BgR77q52.js";import"./DialogMetadata-D3CLniEz.js";import"./DialogStatus-BTAZB5yD.js";import"./MetaItem-pUt1ruWd.js";import"./ProgressIcon-Cbns3Jil.js";import"./Paperclip-Bz_MQKsG.js";import"./Files-DcPOTvKQ.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Wt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
