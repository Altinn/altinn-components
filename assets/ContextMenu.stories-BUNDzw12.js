import{j as t}from"./iframe-Dip44woq.js";import{S as b}from"./ArrowRedo-B8ZmDuBl.js";import{S as v}from"./EyeClosed-DVjrJ1Ft.js";import{S as I}from"./Archive-COpGQX5c.js";import{S as k}from"./Trash-DY5xEA5p.js";import{S as w}from"./ClockDashed-CzOgOCvw.js";import{S as l}from"./TeddyBear-cIV4yVhh.js";import{i as u}from"./inboxSearchResults-B81dkfph.js";import{C as r}from"./ContextMenu-DjyLYrv8.js";import{L as x}from"./List-oCmeNZU4.js";import{L as d}from"./ListItem-BNxxo84x.js";import{D as g}from"./DialogListItem-2V1e9i78.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CMLjH0Fx.js";import"./dialogs-D2-0raa-.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-D1_mabTG.js";import"./AttachmentList-Ca9XT6Ol.js";import"./AttachmentLink-CAWKGeFw.js";import"./Icon-B7B4bUSp.js";import"./index-B24kaf2B.js";import"./Skeleton-CxN7sZWy.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./Section-DCVufQoJ.js";import"./Flex-DHvZRHuw.js";import"./Heading-BGLknJpX.js";import"./useHighlightedText-DVvgBsxZ.js";import"./TransmissionList-zhUIbvPB.js";import"./Transmission-D96vEI0n.js";import"./Typography-9n0VU0yu.js";import"./SeenByLog-BrdGlF89.js";import"./SeenByLogButton-CJtfH16W.js";import"./Button-afp2Zwog.js";import"./button-CZ5tfceY.js";import"./AvatarGroup-sgYryoRH.js";import"./Avatar-kiiFl4Mz.js";import"./SeenByLogItem-BMkjqrjq.js";import"./Byline-uYDAyWrl.js";import"./Divider-ds1jujj6.js";import"./DialogActions-BBcv62Ib.js";import"./ButtonGroupDivider-hf3rR7Nz.js";import"./ChevronUp-DojBOeEB.js";import"./ChevronDown-DtUCUzdZ.js";import"./DropdownBase-xu4PDQuO.js";import"./useClickOutside-CNOakT_u.js";import"./ButtonGroup-BAe3FIfN.js";import"./SearchField-B2BM1-WP.js";import"./MagnifyingGlass-B4ceu0rd.js";import"./XMark-CynTM0oO.js";import"./FieldBase-BLO6-Mjz.js";import"./Label-BJSes-CJ.js";import"./index-kI5T7Faz.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./MenuListItem-miXGiz4v.js";import"./MenuListHeading-BQZIqP1w.js";import"./MenuItem-BJUggRUL.js";import"./ItemMedia-5XSAaYKs.js";import"./Checkmark-DnUC-Av1.js";import"./ItemControls-CIGgXmTN.js";import"./ChevronRight-DRGzZC3s.js";import"./useMenu-BX85xV5m.js";import"./InformationSquare-Cyt3NFHk.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-NZ0hfOf3.js";import"./Dropdown-CRmvDx32.js";import"./MenuElipsisHorizontal-BqnYRL06.js";import"./ItemLink-bytzRO3r.js";import"./DialogByline-BJjtef4o.js";import"./DialogMetadata-CiOf7Tg9.js";import"./DialogStatus-GZ_29ITE.js";import"./MetaItem-BtBf6ocE.js";import"./ProgressIcon-BlVMP-hB.js";import"./Paperclip-CD6nbP7E.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
