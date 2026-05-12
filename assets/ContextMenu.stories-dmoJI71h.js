import{j as t}from"./iframe-CU9tIbvZ.js";import{S as b}from"./ArrowRedo-BOLIQiA7.js";import{S as v}from"./EyeClosed-CkHHSlnP.js";import{S as I}from"./Archive-BDkPE7N1.js";import{S as k}from"./Trash-hYNo9HK3.js";import{S as w}from"./ClockDashed-BPJiTGgl.js";import{S as l}from"./TeddyBear-BxL-3fjt.js";import{i as u}from"./inboxSearchResults-C_KQPQre.js";import{C as r}from"./ContextMenu-CYUHBwBA.js";import{L as x}from"./List-CmEHIyyJ.js";import{L as d}from"./ListItem-CfMUAyha.js";import{D as g}from"./DialogListItem-KB4sKwua.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BEikXtHv.js";import"./dialogs-QVQ1QeDn.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BfzD5KsU.js";import"./AttachmentList-DjD8rs5I.js";import"./AttachmentLink-BNDer6L-.js";import"./Icon-BBvHNxu7.js";import"./index-Bd_n44R2.js";import"./Skeleton-WB8_C3gk.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./Section-BozmV6Om.js";import"./Flex-Aa4xg00u.js";import"./Heading-DKJvmFhb.js";import"./useHighlightedText-okRrJvjD.js";import"./TransmissionList-CNGCAw8N.js";import"./Transmission-gF9JIvAw.js";import"./Typography-w6SEqUo0.js";import"./SeenByLog-MUlQ8cIJ.js";import"./SeenByLogButton-BL8dUMzD.js";import"./Button-DwluG-LJ.js";import"./button-DfPuT9nv.js";import"./AvatarGroup-D82OEK4D.js";import"./Avatar-CPYUWVLR.js";import"./SeenByLogItem-BH2b0Zhp.js";import"./Byline-Bqw1wwsS.js";import"./Divider-DZU-0-lX.js";import"./DialogActions-Cz3AsaSu.js";import"./ButtonGroupDivider-Dbxz7H96.js";import"./ChevronUp-C9A9ysE-.js";import"./ChevronDown-D1kreZKO.js";import"./DropdownBase-BtIkFwoT.js";import"./useClickOutside-DXDqZDVP.js";import"./ButtonGroup-Bc7spR1E.js";import"./SearchField-CWeqUa0W.js";import"./MagnifyingGlass-CpZlhX9q.js";import"./XMark-DTYd927G.js";import"./FieldBase-Bc5lvX-i.js";import"./Label-BURQuXSo.js";import"./index-ByNurdCO.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./MenuListItem-DwYyHEmE.js";import"./MenuListHeading-kMHXlGu4.js";import"./MenuItem-B01BWq_H.js";import"./ItemMedia-DuuCC0AM.js";import"./Checkmark-DOBFSC3X.js";import"./ItemControls-BgF8Asgd.js";import"./ChevronRight-XlyxhDjC.js";import"./useMenu-CLh8gMuU.js";import"./index-DdmkzICU.js";import"./InformationSquare-Dq6QQdGV.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DyTNGBZv.js";import"./Dropdown-DgULA5TZ.js";import"./MenuElipsisHorizontal-sU1biIaO.js";import"./ItemLink-FRejQ3nm.js";import"./DialogByline-1xDF3t-2.js";import"./DialogMetadata-tRWz3PUA.js";import"./DialogStatus-33u38r6s.js";import"./MetaItem-CRb2-ODJ.js";import"./ProgressIcon-BFMoxK8T.js";import"./Paperclip-ClDtZHFp.js";import"./Files-Cg7iDgIU.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
