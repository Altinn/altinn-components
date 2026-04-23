import{j as t}from"./iframe-CK12xbO6.js";import{S as b}from"./ArrowRedo-BjorDjwX.js";import{S as v}from"./EyeClosed-DqQMIv3S.js";import{S as I}from"./Archive-tl_Nekk2.js";import{S as k}from"./Trash-DK6LQCTJ.js";import{S as w}from"./ClockDashed-DbIeqyS3.js";import{S as l}from"./TeddyBear-DVGpE8EP.js";import{i as u}from"./inboxSearchResults-BJfm1EBH.js";import{C as r}from"./ContextMenu-C7-0IVhC.js";import{L as x}from"./List-kHfgiCUp.js";import{L as d}from"./ListItem-vt36G1vI.js";import{D as g}from"./DialogListItem-D0IN42hD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CIOYGEMY.js";import"./dialogs-2KE-yqkg.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DUxz4A6x.js";import"./AttachmentList-CpUXWNLk.js";import"./AttachmentLink-CAMq5UNX.js";import"./Icon-BHUPQGzt.js";import"./index-DS2SSX1f.js";import"./Skeleton-CLQkeaUO.js";import"./Badge-BBKRgbs4.js";import"./Tooltip-BdqmcG89.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-D5gu3XYQ.js";import"./lite-DaUVFjkg.js";import"./Section-BZGNeHVH.js";import"./Flex-DQqIzFyb.js";import"./Heading-Drr-of_9.js";import"./useHighlightedText-DdOMnBlO.js";import"./TransmissionList-BdHtOSmp.js";import"./Transmission-ofQ5XslH.js";import"./Typography-PIwVlbiP.js";import"./SeenByLog-BpOdmwGT.js";import"./SeenByLogButton-C7znklEa.js";import"./Button-DTrhNbku.js";import"./button-D6lkouap.js";import"./AvatarGroup-DIAmYFyU.js";import"./Avatar-CjYl4qzD.js";import"./SeenByLogItem-CkGsohhs.js";import"./Byline-B4sW0HRf.js";import"./Divider-mDpyUFas.js";import"./DialogActions-t2H6RIa-.js";import"./ButtonGroupDivider-Bk-HCSfX.js";import"./ChevronUp-D_0uwKbP.js";import"./ChevronDown-CccB8pUx.js";import"./DropdownBase-B20GPr-R.js";import"./useClickOutside-B_ap6-94.js";import"./ButtonGroup-BcyGdCwQ.js";import"./SearchField-CfLtnFna.js";import"./MagnifyingGlass-qxU1ofSJ.js";import"./XMark-MadrIoK8.js";import"./FieldBase-NrhOHdDA.js";import"./Label-CQOYgwqz.js";import"./index-BCgvi17I.js";import"./Input-CN33OjmR.js";import"./input-CdhXBgWK.js";import"./MenuListItem-B_ethkwV.js";import"./MenuListHeading-CCkIOc1e.js";import"./MenuItem-DjmA2GJO.js";import"./ItemMedia-XHYq4GSc.js";import"./Checkmark-DQBecNO6.js";import"./ItemControls-B1M2j2tm.js";import"./ChevronRight-DxL2oOG5.js";import"./useMenu-BM6Zh5Qq.js";import"./InformationSquare-C5QsI1Pb.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController--WYsFZ5d.js";import"./Dropdown-CtQW7C8x.js";import"./MenuElipsisHorizontal-Bv4w19eK.js";import"./ItemLink-DnABx_vH.js";import"./DialogByline-B0xKcM-w.js";import"./DialogMetadata-Bm__MPYx.js";import"./DialogStatus-BGR0VBd3.js";import"./MetaItem-DZIhcmvS.js";import"./ProgressIcon-BLe1LQvd.js";import"./Paperclip-B08sHd0a.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Wt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Wt as __namedExportsOrder,Vt as default};
