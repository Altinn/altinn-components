import{j as t}from"./iframe-BUZW8AMM.js";import{S as b}from"./ArrowRedo-C3FUOzhP.js";import{S as v}from"./EyeClosed-LipupXrJ.js";import{S as I}from"./Archive-BF40uVhW.js";import{S as k}from"./Trash-CBYCI39t.js";import{S as w}from"./ClockDashed-D1Qaa07F.js";import{S as l}from"./TeddyBear-BGIxJfkZ.js";import{i as u}from"./inboxSearchResults-ykU4MXg0.js";import{C as r}from"./ContextMenu-DWxhfZ1J.js";import{L as x}from"./List-C59qtuov.js";import{L as d}from"./ListItem-DqPqNTbx.js";import{D as g}from"./DialogListItem-ChnLDNdK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CoMggIDA.js";import"./dialogs-BgNVveCo.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C3EKnd_d.js";import"./AttachmentList-BbAH4Wyu.js";import"./AttachmentLink-DT0NPNo9.js";import"./Icon-pO_LYxKU.js";import"./index-DDG5Qp_D.js";import"./Skeleton-2WT-jYKy.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-Cq-TarIz.js";import"./lite-DaUVFjkg.js";import"./Section-DQEzrtai.js";import"./Flex-ErkwFvdj.js";import"./Heading-BBJzhiZm.js";import"./useHighlightedText-Df1F8nSN.js";import"./TransmissionList-DFubL1q-.js";import"./Transmission-DH1Gjxhu.js";import"./Typography-DPxU9lqg.js";import"./SeenByLog-ByiJhi87.js";import"./SeenByLogButton-B1HPf9gb.js";import"./Button-gpqpzK6E.js";import"./button-Bzfkec0d.js";import"./AvatarGroup-BSpRcNGO.js";import"./Avatar-VmI9f2FC.js";import"./SeenByLogItem-iwyGtxER.js";import"./Byline-C-BCQ4Rh.js";import"./Divider-oEZeoRWI.js";import"./DialogActions-Bv1_FOU7.js";import"./ButtonGroupDivider-DSjna6gU.js";import"./ChevronUp-Cmvg9ZuE.js";import"./ChevronDown-C7e7c8oq.js";import"./DropdownBase-BKnjOQhs.js";import"./useClickOutside-mV-pbQPB.js";import"./ButtonGroup-BdRMlEte.js";import"./SearchField-DOgIBcSC.js";import"./MagnifyingGlass-e5Ddvpo2.js";import"./XMark-N_5CtkVA.js";import"./FieldBase-D0VPfoZq.js";import"./Label-EV3PcI6g.js";import"./index-BxrYGQ_D.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./MenuListItem-DOB3vVPI.js";import"./MenuListHeading-BbGKJ44d.js";import"./MenuItem-B9Qpze_W.js";import"./ItemMedia-lV46z_8W.js";import"./Checkmark-B1cvuYYq.js";import"./ItemControls-CILw3fe6.js";import"./ChevronRight-Be2F8dIE.js";import"./useMenu-DzfOGhde.js";import"./index-B1N1jCNu.js";import"./InformationSquare-D87nn8LZ.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-ocgtyANg.js";import"./Dropdown-B9D2leTq.js";import"./MenuElipsisHorizontal-Dq6dZaad.js";import"./ItemLink-pH7m12-R.js";import"./DialogByline-DrYkIKCQ.js";import"./DialogMetadata-BhYeVOUE.js";import"./DialogStatus-BZzS1hGl.js";import"./MetaItem-BTERfq6U.js";import"./ProgressIcon-CjQD5_hS.js";import"./Paperclip-DiBOowVE.js";import"./Files-CtoSf7Bu.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
