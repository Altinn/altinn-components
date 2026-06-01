import{p as t}from"./iframe-HmDeAVAp.js";import{S as b}from"./ArrowRedo-jTQJwTeE.js";import{S as v}from"./EyeClosed-Cbg7kKEm.js";import{S as I}from"./Archive-DP3tiXIo.js";import{S as k}from"./Trash-DTo3Lvzs.js";import{S as w}from"./ClockDashed-DPb7YX4C.js";import{C as r}from"./ContextMenu-oQVSL7Ks.js";import{i as l}from"./inboxSearchResults-CP-aOy8F.js";import{S as u}from"./TeddyBear-DhJblC7z.js";import{L as x}from"./List-CZwq9NP_.js";import{D as d}from"./DialogListItem-CM6EG_QX.js";import{L as g}from"./ListItem-u6nNWWO6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BNhfXdUV.js";import"./useDropdownMenuController-DyRpfBpv.js";import"./Dropdown-DitJK_eU.js";import"./index-CDtevUxF.js";import"./Button-SB9AH0kY.js";import"./tooltip-DaXe8rKK.js";import"./XMark-DFSmJjac.js";import"./SearchField-jJndU2uH.js";import"./MagnifyingGlass-BBPHMis4.js";import"./FieldBase-DgiW3HLY.js";import"./Typography-C3y2BBzr.js";import"./useHighlightedText-CVbcsWEJ.js";import"./Skeleton-C_Dxe6ID.js";import"./Field-D-jjHIb3.js";import"./Label-Bwfk_b4F.js";import"./Input-Dd7kdPyi.js";import"./useMenu-l9Wd3rxx.js";import"./MenuListItem-DjeDZ_MF.js";import"./MenuListHeading-Bby608mu.js";import"./MenuItem-C_rMT9NN.js";import"./ItemMedia-CLlob8fs.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Icon-DE5JaAj2.js";import"./Checkmark-_BupHaSE.js";import"./ItemLabel-DIku2iz8.js";import"./Heading-CYuK0FXt.js";import"./ItemControls-dRm3u7Mm.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./ChevronRight-Cqfpq8PE.js";import"./index-4vigTm9p.js";import"./InformationSquare-C8JPrkni.js";import"./MenuElipsisHorizontal-BDeVXpR4.js";import"./dialogs-DzsBhTz6.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CGfuMYly.js";import"./AttachmentList-C0we0tyH.js";import"./AttachmentLink-Dqsf_6G1.js";import"./File-CRhlQE9B.js";import"./Section-0rDkal-t.js";import"./Flex-CKAWkLAd.js";import"./TransmissionList-DvQ1o0Dw.js";import"./Transmission-DGSAp2vj.js";import"./SeenByLog-rCRiwdIb.js";import"./SeenByLogButton-Cc0VSfrP.js";import"./SeenByLogItem-BgewTT5Y.js";import"./Byline-CbAX77ox.js";import"./Divider-BIbR-R0K.js";import"./DialogActions-DOwHh6G7.js";import"./ButtonGroupDivider-CnzTkYJc.js";import"./ChevronUp-DWlUIEYm.js";import"./ChevronDown-D8XmQ_JM.js";import"./DropdownBase-BRTT51cU.js";import"./useClickOutside-DeuQLjae.js";import"./ButtonGroup-IIZdVlDD.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-p8rf4Jdz.js";import"./ItemLink-DyGCCHkK.js";import"./DialogByline-qtAFVZlu.js";import"./DialogMetadata-C2PgRht5.js";import"./DialogStatus-CH5DyySD.js";import"./MetaItem-Crpn6HZU.js";import"./ProgressIcon-DynmCEs3.js";import"./Paperclip-C8xe1fL3.js";import"./Files-FdN32_BN.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Wt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
