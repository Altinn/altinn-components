import{j as t}from"./iframe-JDDu8qct.js";import{S as b}from"./ArrowRedo-D1ditHdQ.js";import{S as v}from"./EyeClosed-BmP8Hij1.js";import{S as I}from"./Archive-CIT6mhgS.js";import{S as k}from"./Trash-BUbta1pc.js";import{S as w}from"./ClockDashed-6gH_acLs.js";import{S as l}from"./TeddyBear-BrFJ7zgn.js";import{i as u}from"./inboxSearchResults-DvGD8Oev.js";import{C as r}from"./ContextMenu-CY-OQIYm.js";import{L as x}from"./List-nBnRX5N2.js";import{L as d}from"./ListItem-D34g-riv.js";import{D as g}from"./DialogListItem-xYQLG_mt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BWG34Gxg.js";import"./dialogs-CQs9lpOE.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Duxfvf0D.js";import"./AttachmentList-DupVy5vU.js";import"./AttachmentLink-DEhakb7C.js";import"./Icon-DIHT6axv.js";import"./index--LOES4hQ.js";import"./Skeleton-CG77vT0k.js";import"./Badge-mnqqv4hK.js";import"./Tooltip-DdVbMRYJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-Dm0wt9US.js";import"./lite-DaUVFjkg.js";import"./Section-0xRJEQzM.js";import"./Flex-BxwOuuQR.js";import"./Heading-DTbUzRnV.js";import"./useHighlightedText-CEk7sGm4.js";import"./TransmissionList-BOzpiUMo.js";import"./Transmission-BhcQ0jDz.js";import"./Typography-yaBddsX3.js";import"./SeenByLog-B6gHaXfs.js";import"./SeenByLogButton-Cz6epyxS.js";import"./Button-DJdKIqrT.js";import"./button-xt_-egYh.js";import"./AvatarGroup-iM9HxeRB.js";import"./Avatar-C90IY9ut.js";import"./SeenByLogItem-CyYXnb1A.js";import"./Byline-D5n1Eazz.js";import"./Divider-CEupNHti.js";import"./DialogActions-DYszTon3.js";import"./ButtonGroupDivider-CHx564QR.js";import"./ChevronUp-Skyl4vcA.js";import"./ChevronDown-Bp0cSPFx.js";import"./DropdownBase-CAOgqFCI.js";import"./useClickOutside-C2e1o_8Y.js";import"./ButtonGroup-BtRMC3LR.js";import"./SearchField-CPeUZoGo.js";import"./MagnifyingGlass-DxjT3S7Z.js";import"./XMark-YkWOq4QK.js";import"./FieldBase-D3HPIoAl.js";import"./Label-D5tTdPwy.js";import"./index-BaWoKolw.js";import"./Input-BYdHuux7.js";import"./input-qV3rGBnT.js";import"./MenuListItem-CSWiIfGI.js";import"./MenuListHeading-5MWZ1R2O.js";import"./MenuItem-C4GbvFyO.js";import"./ItemMedia-Xjox6rUV.js";import"./Checkmark-D1rpd2hz.js";import"./ItemControls-_7JFqe2W.js";import"./ChevronRight-CAXd-oaR.js";import"./useMenu-DwkqWK9f.js";import"./InformationSquare-CibJvFTt.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-Dq4qSJid.js";import"./Dropdown-C4SP0e_D.js";import"./MenuElipsisHorizontal-3YEM2VfJ.js";import"./ItemLink-C0xhkHSa.js";import"./DialogByline-BwICTuQ8.js";import"./DialogMetadata-BLpX-Acm.js";import"./DialogStatus-Cb2i7_et.js";import"./MetaItem-Bl2RkEpa.js";import"./ProgressIcon-By6Xc0Uf.js";import"./Paperclip-8FnOlKFn.js";import"./Files-oWNFx3wD.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Wt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
